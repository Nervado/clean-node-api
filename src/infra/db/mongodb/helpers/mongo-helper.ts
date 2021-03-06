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
    this.client = null
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }
    return this.client.db().collection(name)
  },

  map (collection: any): any {
    const { _id, ...args } = collection
    return { id: _id, ...args }
  }
}
