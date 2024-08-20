type Message = {
  userToken: string
}

type JoinMsg = Message & {
  sessionId: string
}

type ChatMessage = Message & {
  text: string
}
