export type ClientServerMessage = {
  userToken: string
}

export type JoinMsg = ClientServerMessage & {
  sessionId: string
}

export type ChatMessage = ClientServerMessage & {
  text: string
}

export type ServerClientMessage = {
  text: string
}
