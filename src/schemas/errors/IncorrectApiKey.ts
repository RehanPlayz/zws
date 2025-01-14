import {Static, Type} from '@sinclair/typebox';

export const IncorrectApiKey = Type.Object(
	{
		statusCode: Type.Literal(401),
		code: Type.Literal('E_INCORRECT_API_KEY'),
		error: Type.Literal('Unauthorized'),
		message: Type.String(),
	},
	{
		description: 'The provided API key was incorrect',
	},
);

export type IncorrectApiKey = Static<typeof IncorrectApiKey>;
