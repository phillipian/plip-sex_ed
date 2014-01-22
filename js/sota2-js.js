$(document).ready(function() {
  // adds hover property for the top navigation bar
  $('.hover').mouseenter(function() {
    $(this).fadeTo('fast',1);
    $(this).css('border-bottom', '2px solid #ffffff'); // changed from #cccccc to #ffffff to match phillipian.net
  });
  $('.hover').mouseleave(function() {
    $(this).fadeTo('fast',0.50);
    $(this).css('border-bottom', '0');
  });

  // set Highcharts global options
  Highcharts.setOptions({
    chart: {
      style: {
        fontFamily: 'Lato, sans-serif'
      }
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        center: ["50%", "50%"]
      }
    } 
  });

 if (typeof $('#generalGender').val() != 'undefined') {
    var generalGender = new Highcharts.Chart({
		
      chart: {
        renderTo: 'generalGender',
        type: 'pie'
      },
      title: {
        text: 'What is your sex?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Female', 54.60],
          ['Male',   45.40]
        ]
      }]
    });
  }
  
  
  // create generalGeography chart in '#generalGeography' if the div exists
  if (typeof $('#generalGeography').val() != 'undefined') {
    var generalGeography = new Highcharts.Chart({
      chart: {
        renderTo: 'generalGeography',
        type: 'pie'
      },
      title: {
        text: 'Where are you from?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Northeastern US',                    64.23],
          ['Southeastern US',                     7.45],
          ['Midwestern US',                       6.28],
          ['Northwestern US',                     4.82],
          ['Southwestern US',                     5.26],
          ['Discontiguous US state or territory', 0.58],
          ['International',                      11.39]
        ]
      }]
    });
  }

  // create generalRace chart in '#generalRace' if the div exists
  if (typeof $('#generalRace').val() != 'undefined') {
    var generalRace = new Highcharts.Chart({
      chart: {
        renderTo: 'generalRace',
        type: 'pie'
      },
      title: {
        text: 'What is your race/ethnicity?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Caucasian',               60.73],
          ['African-American/African', 4.96],
          ['Asian-American/Asian',    17.23],
          ['Native American',          0.58],
          ['Hispanic',                 4.67],
          ['Pacific Islander',         0.73],
          ['Middle Eastern',           0.73],
          ['South Asian',              2.92],
          ['Other',                    7.45]
        ]
      }]
    });
  }

  // create generalReligion chart in '#generalReligion' if the div exists
  if (typeof $('#generalReligion').val() != 'undefined') {
    var generalReligion = new Highcharts.Chart({
      chart: {
        renderTo: 'generalReligion',
        type: 'pie'
      },
      title: {
        text: 'With which religion or belief do you identify?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Christianity', 40.44],
          ['Judaism',       6.42],
          ['Islam',         0.88],
          ['Hinduism',      2.04],
          ['Buddhism',      2.48],
          ['Agnosticism',  17.52],
          ['Atheism',      20.44],
          ['Other',         9.78]
        ]
      }]
    });
  }

  // create generalSexuality chart in '#generalSexuality' if the div exists
  if (typeof $('#generalSexuality').val() != 'undefined') {
    var generalSexuality = new Highcharts.Chart({
    chart: {
      renderTo: 'generalSexuality',
      type: 'pie'
    },
    title: {
      text: 'What is your sexual orientation?'
    },
    series: [{
      name: 'Percent of Students',
      data: [
        ['Gay',           4.26],
        ['Straight',     86.93],
        ['Bisexual',      4.99],
        ['Unsure',        3.82]
      ]
    }]
    });
  }

  // create generalPolitics chart in '#generalPolitics' if the div exists
  if (typeof $('#generalPolitics').val() != 'undefined') {
    var generalPolitics = new Highcharts.Chart({
      chart: {
        renderTo: 'generalPolitics',
        type: 'pie'
      },
      title: {
        text: 'What is your political affiliation?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Democratic',   36.90],
          ['Republican',   18.74],
          ['Independent',  21.38],
          ['Undecided',    20.20],
          ['Other',         2.78]
        ]
      }]
    });
  }

  // create generalSocioEco chart in '#generalSocioEco' if the div exists
  if (typeof $('#generalSocioEco').val() != 'undefined') {
    var generalSocioEco = new Highcharts.Chart({
      chart: {
        renderTo: 'generalSocioEco',
        type: 'pie'
      },
      title: {
        text: 'What is your socioeconomic identity?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Upper Class',        22.92],
          ['Upper Middle Class', 45.26],
          ['Middle Class',       22.04],
          ['Lower Middle Class',  7.45],
          ['Lower Class',         2.34]
        ]
      }]
    });
  }

  // create generalNice chart in '#generalNice' if the div exists
  if (typeof $('#generalNice').val() != 'undefined') {
    var generalNice = new Highcharts.Chart({
      chart: {
        renderTo: 'generalNice',
        type: 'pie'
      },
      title: {
        text: 'Do you believe that Andover students are \"nice\"?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes', 75.32],
          ['No',  24.68]
        ]
      }]
    });
  }
  /***** END GENERAL SECTION *****/

  /**********************************
   * GRAPHS FOR ACADEMICS SECTION
   **********************************/
  // create PAexCollege chart in '#PAexCollege' if the div exists
  if (typeof $('#PAexCollege').val() != 'undefined') {
    var PAexCollege = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexCollege',
        type: 'column'
      },
      title: {
        text: 'How do you think attending Andover affects your chances of attending a \"top college\" (however you define the term)?'
      },
      xAxis: {
        title: {text: 'Generally speaking, do you consider yourself happy at Andover?'},
        categories: ['Yes', 'No']
      },
      yAxis: {
        title: {text: 'Percent of Students'}
      },
      series: [{
        name: 'Increased',
        data: [40.15, 16.81]
      }, {
        name: 'Decreased',
        data: [42.99, 70.80]
      }, {
        name: 'Did not change',
        data: [16.86, 12.39]
      }]
    });
  }

  // creates side-by-side PAexAcadEx charts in '#PAexAcadExYes' and '#PAexAcadExNo' if the div exists
  if (typeof $('#PAexAcadEx').val() != 'undefined') {
    var PAexAcadExYes = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexAcadExYes',
        type: 'pie'
      },
      title: {
        text: 'Am I happy?: Yes'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Too easy',       0.76],
          ['A little easy',  1.52],
          ['Just right',    27.65],
          ['A little hard', 61.74],
          ['Too hard',       8.33]
        ]
      }] 
    });
    var PAexAcadExNo = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexAcadExNo',
        type: 'pie'
      },
      title: {
        text: 'Am I happy?: No'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Too easy',       1.77],
          ['A little easy',  0.88],
          ['Just right',     8.85],
          ['A little hard', 53.98],
          ['Too hard',      34.51]
        ]
      }] 
    });
  }

  // creates side-by-side PAexPAhappy charts in '#PAexPAhappyYes' and '#PAexPAhappyNo' if the div exists
  if (typeof $('#PAexPAhappy').val() != 'undefined') {
    var PAexPAhappyYes = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexPAhappyYes',
        type: 'pie'
      },
      title: {
        text: 'Am I happy?: Yes'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes', 81.80],
          ['No',  18.20]
        ]
      }] 
    });
    var PAexPAhappyNo = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexPAhappyNo',
        type: 'pie'
      },
      title: {
        text: 'Am I happy?: No'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes', 33.61],
          ['No',  66.39]
        ]
      }] 
    });
  }

  // creates side-by-side PAexCompete charts in '#PAexCompeteYes' and '#PAexCompeteNo' if the div exists
  if (typeof $('#PAexCompete').val() != 'undefined') {
    var PAexCompeteYes = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexCompeteYes',
        type: 'pie'
      },
      title: {
        text: 'Am I happy?: Yes'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Motivating',           40.72],
          ['Damaging',             27.08],
          ['Neutral',              30.11],
          ['No competitive nature', 2.08]
        ]
      }] 
    });
    var PAexCompeteNo = new Highcharts.Chart({
      chart: {
        renderTo: 'PAexCompeteNo',
        type: 'pie'
      },
      title: {
        text: 'Am I happy?: No'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Motivating',           12.39],
          ['Damaging',             75.22],
          ['Neutral',              11.50],
          ['No competitive nature', 0.88]
        ]
      }]
    });
  }
  
  // create acadWGPA chart in '#acadWGPA' if the div exists
  if (typeof $('#acadWGPA').val() != 'undefined') {
    var acadWGPA = new Highcharts.Chart({
      chart: {
        renderTo: 'acadWGPA',
        type: 'pie'
      },
      title: {
        text: 'What was your rounded Winter 2013 GPA?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['3.0 or lower', 0.78],
          ['3.5',          1.56],
          ['4.0',          7.64],
          ['4.5',         19.50],
          ['5.0',         39.63],
          ['5.5',         22.78],
          ['6.0',          8.11]
        ]
      }]
    });
  }

  // create acadCheat chart in '#acadCheat' if the div exists
  if (typeof $('#acadCheat').val() != 'undefined') {
    var acadCheat = new Highcharts.Chart({
      chart: {
        renderTo: 'acadCheat',
        type: 'pie'
      },
      title: {
        text: 'Have you ever cheated on any coursework?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes', 26.32],
          ['No',  73.68]
        ]
      }]
    });
  }

  // create acadPlagiarize chart in '#acadPlagiarize' if the div exists
  if (typeof $('#acadPlagiarize').val() != 'undefined') {
    var acadPlagiarize = new Highcharts.Chart({
      chart: {
        renderTo: 'acadPlagiarize',
        type: 'pie'
      },
      title: {
        text: 'Have you ever plagiarized?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes, on a major assignment',                 1.44],
          ['Yes, on a minor assignment',                 6.06],
          ['Yes, on both a major and minor assignment',  3.51],
          ['No',                                        89.00]
        ]
      }]
    });
  }

  // create acadGDteachers chart in '#acadGDteachers' if the div exists
  if (typeof $('#acadGDteachers').val() != 'undefined') {
    var acadGDteachers = new Highcharts.Chart({
      chart: {
        renderTo: 'acadGDteachers',
        type: 'pie'
      },
      title: {
        text: 'Are there grading disparities between teachers of the same subject at Andover?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes, to a permissible degree', 31.51],
          ['Yes, to an unfair degree',     64.74],
          ['No',                            3.74]
        ]
      }]
    });
  }

  // create acadGDdepts chart in '#acadGDdepts' if the div exists
  if (typeof $('#acadGDdepts').val() != 'undefined') {
    var acadGDdepts = new Highcharts.Chart({
      chart: {
        renderTo: 'acadGDdepts',
        type: 'pie'
      },
      title: {
        text: 'Are there grading disparities between departments at Andover?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Yes, to a permissible degree', 53.67],
          ['Yes, to an unfair degree',     35.26],
          ['No',                           11.08]
        ]
      }]
    });
  }

  // create acadGDdeptsYes in '#acadGDdeptsYes' if the div exists
  if (typeof $('#acadGDdeptsYes').val() != 'undefined') {
    var acadGDdeptsYes = new Highcharts.Chart({
      chart: {
        renderTo: 'acadGDdeptsYes',
        type: 'pie'
      },
      title: {
        text: 'If there are grading disparities between departments at Andover, which is the most difficult department in terms of grading?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['English',  53.40],
          ['History',  22.16],
          ['Language',  1.92],
          ['Science',   9.25],
          ['RelPhil',   5.58],
          ['Math',      5.58],
          ['Art',       1.75],
          ['Music',     0.17],
          ['Theatre',   0.17]
        ]
      }]
    });
  }

 
 // create acadWorkHrs in '#acadWorkHrs' if the div exists
  if (typeof $('#acadWorkHrs').val() != 'undefined') {
    var acadWorkHrs = new Highcharts.Chart({
      chart: {
        renderTo: 'acadWorkHrs',
        type: 'column'
      },
      title: {
        text: 'How many hours do you spend on class work each day?'
      },
      xAxis: {
        title: {
          text: 'Class'
        },
        categories: ['2013', '2014', '2015', '2016']
      },
      yAxis: {
        title: {
          text: 'Percent of Students'
        }
      },
      series: [{
          name: '2 hours or fewer',
          data: [18.99, 5.05, 6.37, 2.80]
        }, {
          name: '3',
          data: [20.11, 11.11, 20.38, 25.23]
        }, {
          name: '4',
          data: [32.96, 29.80, 34.49, 42.06]
        }, {
          name: '5',
          data: [13.97, 29.80, 29.94, 22.43]
        }, {
          name: '6',
          data: [10.06, 18.69, 7.64, 2.80]
        }, {
          name: '7 or more',
          data: [3.91, 5.56, 1.27, 4.67]
      }]
    });
  }
 
 
 
 
 
 
 
 
  
  /*
  
  var welcomeGender = new Highcharts.Chart({
    chart: {
      renderTo: 'chart0',
      type: 'pie'
    },
    title: {
      text: 'What is your sex?'
    },
    plotOptions: {
      pie: {
        center: ["50%", "50%"]
      }
    },
    series: [{
      data: [
        ['Female', 374],
        ['Male',   311]
      ]
    }]
  });

  // create welcomeGeography chart in '#welcomeGeography'
  var welcomeGeography = new Highcharts.Chart({
    chart: {
      renderTo: 'chart1',
      type: 'pie'
    },
    title: {
      text: 'Where are you from?'
    },
    plotOptions: {
      pie: {
        center: ["50%", "50%"]
      }
    },
    series: [{
      data: [
        ['Northeastern US',                   440],
        ['Southeastern US',                    51],
        ['Midwestern US',                      43],
        ['Northwestern US',                    33],
        ['Southwestern US',                    36],
        ['Discontiguous US state or territory', 4],
        ['International',                      78]
      ]
    }]
  });

  var generalGender = new Highcharts.Chart({
		
      chart: {
        renderTo: 'generalGender',
        type: 'pie'
      },
      title: {
        text: 'What is your sex?'
      },
      series: [{
        name: 'Percent of Students',
        data: [
          ['Female', 54.60],
          ['Male',   45.40]
        ]
      }]
    });

    // create welcomeRace chart in '#welcomeRace'
  var welcomeRace = new Highcharts.Chart({
    chart: {
      renderTo: 'chart2',
      type: 'pie'
    },
    title: {
      text: 'What is your race/ethnicity?'
    },
    plotOptions: {
      pie: {
        center: ["50%", "50%"]
      }
    },
    series: [{
      data: [
        ['Caucasian',               416],
        ['African-American/African', 34],
        ['Asian-American/Asian',    118],
        ['Native American',           4],
        ['Hispanic',                 32],
        ['Pacific Islander',          5],
        ['Middle Eastern',            5],
        ['South Asian',              20],
        ['Other',                    51]
      ]
    }]
  });

  */
  
});
