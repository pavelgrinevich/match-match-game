export default class RatingList {
  constructor(config) {
    this.config = config;

    this.ratingList = JSON.parse(window.localStorage.getItem('ratingList'));
    if (!this.ratingList) this.ratingList = [];

    this.createRatingTable();
  }

  addNewScore(finishObj) {
    let score = 0;

    const timeArr = finishObj.time.split(':');
    score = Number(timeArr[0]) * 60 * 100 + Number(timeArr[1]) * 100 + Number(timeArr[2]);
    
    score = Math.floor(score / (finishObj.numberOfCards + 3));
    score = score * Math.floor(finishObj.countOfSteps / (finishObj.numberOfCards + 3));

    finishObj.score = score;
    
    for (let i = 0; i <= this.ratingList.length; i++) {
      if (!this.ratingList[i]) {
        this.ratingList.push([this.config.profile[0], score]);
        finishObj.place = i + 1;
        break;
      }

      if (score > this.ratingList[i][1]) {
        this.ratingList.splice(i, 0, [this.config.profile[0], score]);
        finishObj.place = i + 1; 
        break;
      }
    }

    window.localStorage.setItem('ratingList', JSON.stringify(this.ratingList));

    this.createRatingTable();
  }

  createRatingTable() {
    const ratingTable = document.createElement('table');
    const headTableRow = document.createElement('tr');

    ratingTable.appendChild(headTableRow);

    // add a table header
    for (let i = 0; i < 4; i++) {
      const headTableCol = document.createElement('th');
      if (i === 1) headTableCol.innerHTML = 'top10';
      if (i === 3) headTableCol.innerHTML = 'score';
      headTableRow.appendChild(headTableCol);
    }

    // fill the table with data
    for (let i = 0; i < 10; i++) {
      const tableRow = document.createElement('tr');
      ratingTable.appendChild(tableRow);

      for (let j = 0; j < 4; j++) {
        const tableCol = document.createElement('td');
        if (j === 0) tableCol.innerHTML = `${i + 1}`;
        if (j === 2) tableCol.classList.add('dotted');
        if (this.ratingList[i]) {
          if (j === 1) tableCol.innerHTML = `${this.ratingList[i][0]}`;
          if (j === 3) tableCol.innerHTML = `${this.ratingList[i][1]}`;
        }  else {
          if (j === 1) tableCol.innerHTML = 'empty';
          if (j === 3) tableCol.innerHTML = 'none';
          tableCol.style.color = 'rgba(255, 255, 255, .3)';
        }
          
        tableRow.appendChild(tableCol);
      }
    }
    
    this.config.ratingList = ratingTable;
  }
}
