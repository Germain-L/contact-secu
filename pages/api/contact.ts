// pages/api/contact.ts
import type {NextApiRequest, NextApiResponse} from 'next';
import {create} from '../../lib/contact'; // Adjust the import path as necessary

interface ApiResponse {
    success: boolean;
    contact?: any; // Consider defining a more specific type or using the Contact interface
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method === 'POST') {
        try {
            const contact = await create(req.body);
            return res.status(200).json({success: true, contact});
        } catch (error) {
            return res.status(500).json({success: false, error: (error as Error).message || 'An error occurred'});
        }
    } else {
        res.setHeader('Allow', ['POST', 'GET']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


