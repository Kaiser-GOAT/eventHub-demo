const eventHub = {
  map: {},
  on: (name, fn) => {
    eventHub.map[name] = eventHub.map[name] || []
    eventHub.map[name].push(fn)
  },
  off: (name, fn) => {
    if (!eventHub.map[name]) return
    let index = eventHub.map[name].indexOf(fn)
    if (index < 0) return
    eventHub.map[name].splice(index, 1)
  },
  emit: (name, data) => {
    if (!eventHub.map[name] && eventHub.map[name].length === 0) return
    eventHub.map[name].forEach((fn) => fn.call(undefined, data))
  },
}

eventHub.on('click', console.log)
eventHub.on('click', console.error)
setTimeout(() => {
  eventHub.emit('click', 'kaiser')
}, 3000)
