export const PERSON_ON_THE_QUEUE_DELETED = 'PERSON_ON_THE_QUEUE_DELETED'
export const PERSON_QUEUE_RENDERING_STARTED = 'PERSON_QUEUE_RENDERING_STARTED'
export const PERSON_QUEUE_RENDERING_ENDED = 'PERSON_QUEUE_RENDERING_ENDED'
export const TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED = 'TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED'

export const personOnTheQueueDeleted = payload => ({type: PERSON_ON_THE_QUEUE_DELETED, payload})
export const personQueueRenderingStarted = () => ({type: PERSON_QUEUE_RENDERING_STARTED})
export const personQueueRenderingEnded = () => ({type: PERSON_QUEUE_RENDERING_ENDED})
export const tranferPersonToTheDiscothequeRequested = payload => ({type: TRANSFER_PERSON_TO_THE_DISCOTHEQUE_REQUESTED, payload})

