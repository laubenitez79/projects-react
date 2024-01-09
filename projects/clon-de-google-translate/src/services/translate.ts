import {OpenAI} from 'openai';
import { FromLanguage, Language } from '../types.d';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function translate ({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: FromLanguage
    toLanguage: Language
    text: string
}) {
    const messages = [
        {
            role: ChatCompletionRequestMessageRoleEnum.,
            content: 'You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{`and`}}`. You can also recive {{auto}} which neans that you have to detect the language. The language you translate to is surrounded by `[[` and `]]`. '
        }
    ]
}