import type { NextApiRequest, NextApiResponse } from 'next';
import { Contact, list } from '../../lib/contact'; // Adjust the import path as necessary

interface ApiResponse {
    success: boolean;
    contacts?: Contact[];
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method === 'GET') {
        try {
            const contacts = await list();
            res.status(200).json({ success: true, contacts });
        } catch (error) {
            res.status(500).json({ success: false, error: (error as Error).message || 'An error occurred' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}