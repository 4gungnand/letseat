import { MongoClient } from 'mongodb';

export default async function handler(req: any, res: any) {
  const collectionName = req.query.type as string;
  const MONGODB_URI = 'mongodb://fadyanabila:Fayzatha1412@ac-4n2ekr3-shard-00-00.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-01.t4vhx85.mongodb.net:27017,ac-4n2ekr3-shard-00-02.t4vhx85.mongodb.net:27017/?ssl=true&replicaSet=atlas-bzii5w-shard-0&authSource=admin&retryWrites=true&w=majority';
  const uri: string = MONGODB_URI;
  const client = new MongoClient(uri, {});

  try {
    await client.connect();
    const collection = client.db('letseat').collection(collectionName);
    const result = await collection.find().toArray();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  } finally {
    await client.close();
  }
}
