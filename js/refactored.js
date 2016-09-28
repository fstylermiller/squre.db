let mainData = [];
let currentID = 0;
// http://snpy.in/q8xEpR

function Customer() {
  this.id = mainData.length,
  this.generalInfo = {
    company: null,
    cName: null,
    cTitle: null,
    cDept: null,
    cEmail: null,
    cPhoneO: null,
    cPhoneM: null,
    cPhoneD: null,
    cFax: null,
    sAddr: null,
    sCity: null,
    sState: null,
    sCount: null,
    sZip: null,
    sName: null,
    sTitle: null,
    sDept: null,
    sEmail: null,
    sPhoneO: null,
    sPhoneM: null,
    sPhoneD: null,
    sFax: null,
    bAddr: null,
    bCity: null,
    bState: null,
    bCount: null,
    bZip: null,
    bName: null,
    bTitle: null,
    bDept: null,
    bEmail: null,
    bPhoneO: null,
    bPhoneM: null,
    bPhoneD: null,
    bfax: null
  },

  this.productInfo = {
    product1: {
      note: '',
      name: '',
      status: -1
    },
    product2: {
      note: '',
      name: '',
      status: -1
    },
    product3: {
      note: '',
      name: '',
      status: -1
    },
    product4: {
      note: '',
      name: '',
      status: -1
    },
    product5: {
      note: '',
      name: '',
      status: -1
    },
    product6: {
      note: '',
      name: '',
      status: -1
    },
    product7: {
      note: '',
      name: '',
      status: -1
    },
    product8: {
      note: '',
      name: '',
      status: -1
    },
    product9: {
      note: '',
      name: '',
      status: -1
    },
    product10: {
      note: '',
      name: '',
      status: -1
    },
    product11: {
      note: '',
      name: '',
      status: -1
    },
    product12: {
      note: '',
      name: '',
      status: -1
    },
    product13: {
      note: '',
      name: '',
      status: -1
    },
    product14: {
      note: '',
      name: '',
      status: -1
    },
    product15: {
      note: '',
      name: '',
      status: -1
    },
    product16: {
      note: '',
      name: '',
      status: -1
    },
    product17: {
      note: '',
      name: '',
      status: -1
    },
    product18: {
      note: '',
      name: '',
      status: -1
    },
    product19: {
      note: '',
      name: '',
      status: -1
    },
    product20: {
      note: '',
      name: '',
      status: -1
    },
    product21: {
      note: '',
      name: '',
      status: -1
    },
    product22: {
      note: '',
      name: '',
      status: -1
    },
    product23: {
      note: '',
      name: '',
      status: -1
    },
    product24: {
      note: '',
      name: '',
      status: -1
    },
    product25: {
      note: '',
      name: '',
      status: -1
    },
    product26: {
      note: '',
      name: '',
      status: -1
    },
    product27: {
      note: '',
      name: '',
      status: -1
    },
    product28: {
      note: '',
      name: '',
      status: -1
    },
    product29: {
      note: '',
      name: '',
      status: -1
    },
    product30: {
      note: '',
      name: '',
      status: -1
    },
    product31: {
      note: '',
      name: '',
      status: -1
    },
    product32: {
      note: '',
      name: '',
      status: -1
    },
    product33: {
      note: '',
      name: '',
      status: -1
    },
    product34: {
      note: '',
      name: '',
      status: -1
    },
    product35: {
      note: '',
      name: '',
      status: -1
    }
  },
  mainData.push(this)
}

function companySearch(str) {
  mainData.filter((e) => {
    return e.generalInfo.company.indexOf(str) > -1;
  }).forEach((e, i) => {
    const $result = $(`results${i}`);
    $result.text(e.generalInfo.cName);
    $result.siblings().text(e.id);
  });
}

function peopleSearch(str) {
  mainData.filter((e) => {
    return e.generalInfo.cName.indexOf(str) > -1;
  }).forEach((e, i) => {
    const $result = $(`results${i}`);
    $result.text(e.generalInfo.cName);
    $result.siblings().text(e.id);
  });
}

function productSearch(term, interest) {
  mainData.filter((e) => {
    for (var product in e.productInfo) {
      if(product.name.indexOf(term) > -1) {
        return product.status === interest;
      }
    }
  }).forEach((e, i) => {
    const $result = $(`results${i}`);
    $result.text(e.generalInfo.cName);
    $result.siblings().text(e.id);
  });
}

function getMainData(callback) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
      mainData = this.responseText;
      callback();
    }
  }

  xhr.open('GET', 'http://localhost:8000/clients');
}


function saveCustomer() {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', `http://localhost:8000/clients/${currentID}`);
  xhr.send(JSON.stringify(mainData[currentID]));
}

function updateCustomer(id) {
  const customer = mainData[id];
  const xhr = new XMLHttpRequest();

  xhr.open('PUT', `http://localhost:8000/clients/${id}`);
  xhr.send(JSON.stringify(customer));
}

function addInfo() {
  currentID = mainData.length;
  new Customer();
  const $newButton = $('<button id="new-customer">New Customer</button>');
  $sC.append($newButton);
  $newButton.on('click', toggleNewCustomer);
  $add.remove();
  $cancel.remove();

  const formarr = $('.form').toArray();
  const objarr = Object.keys(mainData[id].productInfo);

  for(let i = 0; i < formarr.length; i++) {
    mainData[currentID][objarr[i]] = formarr[i].value();
  }

  saveCustomer();
  Materialize.toast('Database Updated!', 2000);
}

function displayInfo(id) {
  const formarr = $('.form').toArray();
  const objarr = Object.keys(mainData[id].productInfo);

  currentID = id;
  for (let i = 0; i < formarr.length; i++) {
    formarr[i].value(mainData[id][objarr[i]]);
  }
}

function toggleNewCustomer() {
  $('.form').removeAttr('value');
  $('#new-customer').remove();
  const $sC = $('#submit-container');
  const $add = $('<button>Add</button>');
  const $cancel = $('<button>Cancel</button>');
  $add.on('click', addInfo);
  $cancel.on('click', () => {
    const $newCustomer = $('<button id="new-customer">New Customer</button>');
    $sC.append($newCustomer);
    $newCustomer.on('click', toggleNewCustomer);
    $('.form').removeAttr('value');
    $add.remove();
    $cancel.remove();
  });
  $sC.append($add);
  $sC.append($cancel);
}

$('#new-customer').on('click', toggleNewCustomer);

function makeModals() {
  let currentIDM = 0;

  for (let i = 1; i <= 7; i++) {
    let $row = $('<div class="row"></div>');

    for (let j = 1; j <= 5; j++) {
      currentIDM++;
      if (j === 1) {
        var $mainCol = $(`<div class="col s1 offset-s3">`);
      } else {
        var $mainCol = $(`<div class="col s1">`);
      }
      const $modalFooter = $(`<div class="modal-footer">`);
      const $modalFooterRow = $(`<div class="row">`);
      const $inputCol = $(`<div class="col s3 offset-s1">`);
      const $input = $(`<input type="text" class="answer-submit" placeholder="Add a note here" autofocus>`);
      const $checkCol = $(`<div class="col s3">`);
      const $checkAnswer = $(`<a class="modal-action modal-close waves-effect waves-light btn blue-grey darken-1">\u2705</a>`);
      const $modalContainer = $(`<div class="modal-button-container">`);
      const $modalActivator = $(`<a class="modal-trigger waves-effect waves-light btn col${j}" href="#divArt${currentIDM}">${currentIDM}</a>`);
      const $modalType = $(`<div id="divArt${currentIDM}" class="modal modal-fixed-footer">`);
      const $modalContent = $(`<div class="modal-content">`);
      const $articleQuestion = $(`<p class="article-question" id="row${i}col${j}"></p>`);
      // Object.keys(mainData[0].productInfo)[currentIDM]

      $checkCol.append($checkAnswer);
      $inputCol.append($input);
      $modalFooterRow.append($inputCol);
      $modalFooterRow.append($checkCol);
      $modalFooter.append($modalFooterRow);
      $modalContent.append($articleQuestion);
      $modalType.append($modalContent);
      $modalType.append($modalFooter);
      $modalContainer.append($modalActivator);
      $modalContainer.append($modalType);
      $mainCol.append($modalContainer);
      $row.append($mainCol);
    }
    $('#squares-container').append($row);
  }
}

function makeResults() {
  for (let i = 1; i <= 20; i++) {
    const $container = $('<div></div>');
    const $button = $(`<button id="result${i}">result${i}</div>`);
    const $hidden = $('<div class="hidden"></div>')

    $container.append($button);
    $container.append($hidden);
    $('#results-container').append($container);
  }
}

$('#contact-toggle').on('change', () => {
  $('.contact').toggleClass('hidden');
});

$('#shipto-toggle').on('change', () => {
  $('.shipto').toggleClass('hidden');
});

$('#shipcontact-toggle').on('change', () => {
  $('.shipcontact').toggleClass('hidden');
});

$('#billto-toggle').on('change', () => {
  $('.billto').toggleClass('hidden');
});

$('#billcontact-toggle').on('change', () => {
  $('.billcontact').toggleClass('hidden');
});

$('#results-container').on('click', (e) => {
  const id = parseInt($(event.target).siblings().text());
  displayInfo(id);
});

(function init() {
  getMainData(makeModals);
  makeModals(); // don't invoke this later (when the serverside is done);
  makeResults();
})();

/*
  -- glass --
  regular slides
  charged slides
  control box slides
  cover slips

  -- air filtration systems --
  air filtration system
  air filtration system replacement filter
  new air filtration system
  new air filtration system / bulb
  new air filtration system / bulb repl filter
  pure ayre

  -- recycling systems --
  alchohol recycling systems
  1 gal acs
  benchtop
  3 gal
  30 gal
  55 gal
  other

  -- formalin recycling systems --
  1 gal
  BenchTop rs
  3 gal
  30 gal
  55 gal
  other

  -- xylene recycling pads --

  -- Histo cool --
  red histo/cool
  blue histo/cool

  -- tri/path chambers --

  -- staining reagents --
  eosin
  hematoxlyn
  blueing
  clearview

  -- slide printers --

  -- cassette printers --

  -- solvents --
  alchohol
  formalin
  xylene

  -- formalin prefil vials --

*/
