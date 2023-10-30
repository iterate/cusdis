import { NextApiRequest, NextApiResponse } from 'next'

export default function Health(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).send('ok')
}
