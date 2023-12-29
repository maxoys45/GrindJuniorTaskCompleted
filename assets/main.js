const selectors = {
  idInput: document.querySelector('[id-input]'),
  peopleButton: document.querySelector('[search-button]'),
  resultsContainer: document.querySelector('[results-container]'),
}

const setClickEvents = () => {
  selectors.peopleButton.addEventListener('click', () => {
    fetch(`https://jsonplaceholder.org/users/${selectors.idInput.value}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.')
        }

        return response.json()
      })
      .then(person => {
        console.log(person);

        selectors.resultsContainer.innerHTML = `
          <div class="person">
            <img class="thumb" src="https://i.pravatar.cc/300" />

            <div class="content">
              <h2 class="name">${person.firstname} ${person.lastname}</h2>

              <div class="contact-info">
                <p>${person.email}</p>
                <p>${person.phone}</p>
              </div>
            </div>
          </div>
        `
      })
      .catch(err => {
        selectors.resultsContainer.innerHTML = `<p class="error">There is no person with this ID.</p>`

        console.error(err)
      })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello!')

  setClickEvents()
})