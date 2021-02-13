import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: typeof MongoClient,
  uri: typeof String,

  async connect (uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (data: any): any {
    const { _id, ...args } = data
    return { id: _id, ...args }
  }
}
