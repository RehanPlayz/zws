import {Static, Type} from '@sinclair/typebox';

export const MissingApiKey = Type.Object(
	{
		statusCode: Type.Literal(401),
		code: Type.Literal('E_MISSING_API_KEY'),
		error: Type.Literal('Unauthorized'),
		message: Type.String(),
	},
	{
		description: 'You must provide an API key to access this route',
	},
);

export type MissingApiKey = Static<typeof MissingApiKey>;
