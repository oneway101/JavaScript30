const detectKeys = (evt) => {
  // select the element that matches with the keycode
  const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`)

  // select the audio that matches with the keycode
  const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)

  if (!key || !audio) return

  console.log(key, audio)
  // add the style
  key.classList.add("playing")

  // play the audio
  audio.currentTime = 0
  audio.play()
}

function removeTransition(evt) {
  if (evt.propertyName !== "transform") return
  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition)
})

window.addEventListener("keydown", detectKeys)

