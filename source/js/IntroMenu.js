export default class IntroMenu {
  constructor(config, callback, ctx) {
    this.config = config;
    this.callback = callback;
    this.ctx = ctx;

    this.inputFirstName = document.getElementById('firstname');
    this.inputLastName = document.getElementById('lastname');
    this.inputEmail = document.getElementById('email'); 
    this.selectPastProfiles = document.getElementById('past-profiles'); 
    this.buttonApply = document.getElementById('intro-apply');

    this.pastProfilesObj = JSON.parse(window.localStorage.getItem('pastLogs'));

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

  setButtonsAction(config, callback) {
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

        window.localStorage.setItem('pastLogs', JSON.stringify(this.pastProfilesObj));
        this.callback(this.ctx, 'applyProfile');
      }
    })
  }
}
