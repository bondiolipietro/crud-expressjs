import path from 'path';

import dotenv from 'dotenv';
dotenv.config({ path: path.resolve(__dirname, '..', '..', '..', 'config.env') });

const PORT: string = process.env.PORT || '3030';

export default PORT;
