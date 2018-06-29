export default class Logger {
  constructor() {

  }

  notify({event}) {
    console.log(event.text)
  }
}