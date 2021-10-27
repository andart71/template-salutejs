import { SaluteHandler } from '@salutejs/scenario'

export const runAppHandler: SaluteHandler = ({ res, req }) => {
    res.appendSuggestions(['Хватит'])
    res.setPronounceText('Приближается самый страшный праздник в году!')
    console.log('runapp handler')
}
export const noMatchHandler: SaluteHandler = ({ res , req}) => {
    res.appendSuggestions(['Хватит'])
    res.setPronounceText('Я могу рассказать страшные истории, интересные факты или о том, как появился хэллоуин, а также ответить на частые вопросы про этот праздник')
    console.log('nomatch handler')
}
