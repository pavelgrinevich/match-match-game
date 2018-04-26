export default class IntroMenu {
  constructor(config, callback) {
    this.config = config;
    this.callback = callback;

    this.inputFirstName = document.querySelector('#firstname');
    this.inputLastName = document.querySelector('#lastname');
    this.inputEmail = document.querySelector('#email'); 
    this.selectPastProfiles = document.querySelector('#past-profiles'); 
    this.buttonApply = document.querySelector('#intro-apply');

    this.pastProfilesObj = JSON.parse(window.localStorage.getItem('pastProfiles'));

    this.fillPastProfilesSelect();
    this.setIntroMenuAction();
    this.setButtonsAction();
  }

  fillPastProfilesSelect() {
    const option = document.createElement('option');
    option.innerHTML = 'none';
    this.selectPastProfiles.appendChild(option);

    if (!this.pastProfilesObj) {
      this.pastProfilesObj = {};
      option.disabled = "disabled";
    } else {   
      for (let key in this.pastProfilesObj) {
        const item = document.createElement('option');
        item.innerHTML = key;
        this.selectPastProfiles.appendChild(item);
      }
    }
  }

  setIntroMenuAction() {
    this.selectPastProfiles.addEventListener('change', () => {
      if (this.selectPastProfiles.value !== 'none') {
        this.inputFirstName.value = this.pastProfilesObj[this.selectPastProfiles.value][0];
        this.inputLastName.value = this.pastProfilesObj[this.selectPastProfiles.value][1];
        this.inputEmail.value = this.pastProfilesObj[this.selectPastProfiles.value][2];
      } else {
        this.inputFirstName.value = '';
        this.inputLastName.value = '';
        this.inputEmail.value = '';
      }
    })
  }

  setButtonsAction() {
    this.buttonApply.addEventListener('mouseup', () => {
      if (this.inputFirstName.value === '') {
        this.inputFirstName.style.border = '.3vh rgb(255, 0, 0) solid';
      } else {
        const profileArray = [
          this.inputFirstName.value,
          this.inputLastName.value,
          this.inputEmail.value,
        ];

        this.pastProfilesObj[this.inputFirstName.value] = profileArray;
        this.config.profile = profileArray;

        window.localStorage.setItem('pastProfiles', JSON.stringify(this.pastProfilesObj));
        this.callback('applyProfile');
      }
    })
  }
}
