import {
    runAppHandler,
    noMatchHandler
} from './handlers';
import { createSaluteRequest, createSaluteResponse, createScenarioWalker, createSystemScenario, createUserScenario, NLPRequest, NLPResponse, SaluteRequest, createIntents, createMatchers } from '@salutejs/scenario'
import { SaluteMemoryStorage } from '@salutejs/storage-adapter-memory'
import { SmartAppBrainRecognizer } from '@salutejs/recognizer-smartapp-brain'
import model from './intents.json'

const intents = createIntents(model.intents)
const { intent, action, regexp } = createMatchers<SaluteRequest, typeof intents>();

const userScenario = createUserScenario({

})

const systemScenario = createSystemScenario({
    RUN_APP: runAppHandler,
    NO_MATCH: noMatchHandler
})

const scenarioWalker = createScenarioWalker({
    recognizer: new SmartAppBrainRecognizer("2e3e3dab-34c6-4426-bb35-a920341ec732"),
    intents,
    userScenario,
    systemScenario
})

const storage = new SaluteMemoryStorage()

export const handleNlpRequest = async (request: NLPRequest): Promise<NLPResponse> => {
    const req = createSaluteRequest(request)
    const res = createSaluteResponse(request)
    const sessionId = request.uuid.userId
    const session = await storage.resolve(sessionId)
    await scenarioWalker({ req, res, session })
    await storage.save({ id: sessionId, session })
    console.log(JSON.stringify(res.message))
    return res.message
}