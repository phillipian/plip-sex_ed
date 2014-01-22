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
    colors: [
     '#0f1e3d', 
     '#07377f', 
     '#1e52a0', 
     '#4369a1', 
     '#1f88ad', 
     '#4c95ae',
     '#729faf', 
     '#1d9a93', 
     '#5da4a3', 
     '#91b5b3'
    ],
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        center: ["50%", "50%"]
      }
    } 
  });

  // create testchart object to render in '#container' if the div exists
  if (typeof $('#container').val() != 'undefined') {
    var testchart = new Highcharts.Chart({
      chart: {
        renderTo: 'container',
        type: 'bar'
      },
      title: {
        text: 'Fruit'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Fruit eaten'
        }
      },
      series: [{
        name: 'Jane',
        data: [1, 0, 4]
      }, {
        name: 'John',
        data: [5, 7, 3]
      }]
    });
  }
  
  /**********************************
   * GRAPHS FOR GENERAL SECTION
   **********************************/
    // create generalGender chart in '#generalGender' if the div exists
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
          ['Homosexual',           4.26],
          ['Heterosexual',     86.93],
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
          text: 'Are there grading disparities between departments?'
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
          text: 'Which is the most difficult department in terms of grading?'
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
            name: '2 or fewer',
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

    // create side-by-side of acadInflation and acadInflationVsGPA in '#acadGInflation' if the div exists
    if (typeof $('#acadGInflation').val() != 'undefined') {
      var acadInflation = new Highcharts.Chart({
        chart: {
          renderTo: 'acadInflation',
          type: 'pie'
        },
        title: {
          text: 'Do you think there is grade inflation at Andover?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 52.57],
            ['No',  47.43]
          ]
        }]
      });
      var acadInflationVsGPA = new Highcharts.Chart({
        chart: {
          renderTo: 'acadInflationVsGPA',
          type: 'bar'
        },
        title: {
          text: 'Do you think there is grade inflation at Andover?'
        },
        xAxis: {
          title: {
            text: 'Winter 2013 GPA'
          },
          categories: ['3.0 or lower', '3.5', '4.0', '4.5', '5.0', '5.5', '6.0']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [40.00, 30.00, 53.06, 51.20, 49.21, 57.53, 63.46]
        }, {
          name: 'No',
          data: [60.00, 70.00, 46.94, 48.80, 50.79, 42.47, 36.54]
        }]
      });
    }
  /***** END ACADEMICS SECTION *****/

  /**********************************
   * GRAPHS FOR DIVERSITY SECTION
   **********************************/
    // create diversity chart in '#diversity' if div exists
    if (typeof $('#diversity').val() != 'undefined') {
      var diversity = new Highcharts.Chart({
        chart: {
          renderTo: 'diversity',
          type: 'bar'
        },
        title: {
          text: 'Do you believe that Andover is diverse?'
        },
        xAxis: {
          title: {
            text: 'Race'
          },
          categories: ['Caucasian', 'African-American/African', 'Asian-American/Asian', 'Native American', 'Hispanic', 'Pacific Islander', 'Middle Eastern', 'South Asian', 'Other', 'Student Body']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [88.05, 65.52, 85.45, 50, 76.67, 75, 75, 95, 78.26, 85.13]
        }, {
          name: 'No',
          data: [11.95, 34.48, 14.55, 50, 23.33, 25, 25, 5, 21.74, 14.87]
        }]
      });
    }

    // create diversityLeader chart in '#diversityLeader' if div exists
    if (typeof $('#diversityLeader').val() != 'undefined') {
      var diversityLeader = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityLeader',
          type: 'bar'
        },
        title: {
          text: 'Do you consider yourself a leader on campus?'
        },
        xAxis: {
          title: {
            text: 'Race'
          },
          categories: ['Caucasian', 'African-American/African', 'Asian-American/Asian', 'Native American', 'Hispanic', 'Pacific Islander', 'Middle Eastern', 'South Asian', 'Other', 'Student Body']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [55.53, 73.53, 51.69, 75, 46.88, 40, 100, 60, 49.02, 55.33]
        }, {
          name: 'No',
          data: [44.47, 26.47, 48.31, 25, 53.13, 60, 0, 40, 50.98, 44.67]
        }]
      });
    }

    // create diversityEating chart in '#diversityEating' if div exists
    if (typeof $('#diversityEating').val() != 'undefined') {
      var diversityEating = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityEating',
          type: 'bar'
        },
        title: {
          text: 'Have you had an eating disorder while at Andover?'
        },
        xAxis: {
          title: {
            text: 'Race'
          },
          categories: ['Caucasian', 'African-American/African', 'Asian-American/Asian', 'Native American', 'Hispanic', 'Pacific Islander', 'Middle Eastern', 'South Asian', 'Other', 'Student Body']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [13.69, 9.38, 17.09, 50, 9.38, 40, 20, 25, 16, 14.84]
        }, {
          name: 'No',
          data: [86.31, 90.63, 82.91, 50, 90.63, 60, 80, 75, 84, 85.16]
        }]
      });
    }

    // create diversityStandards chart in '#diversityStandards' if div exists
    if (typeof $('#diversityStandards').val() != 'undefined') {
      var diversityStandards = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityStandards',
          type: 'bar'
        },
        title: {
          text: 'Do you believe students at Andover are held to different academic standards depending on their race?'
        },
        xAxis: {
          title: {
            text: 'Race'
          },
          categories: ['Caucasian', 'African-American/African', 'Asian-American/Asian', 'Native American', 'Hispanic', 'Pacific Islander', 'Middle Eastern', 'South Asian', 'Other', 'Student Body']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [31.43, 72.1, 69.09, 75, 33.33, 75, 50, 70, 45.65, 42.88]
        }, {
          name: 'No',
          data: [68.57, 27.59, 30.91, 25, 66.667, 25, 50, 30, 54.35, 57.12]
        }]
      });
    }

    // create diversityRaceDivide chart in '#diversityRaceDivide' if div exists
    if (typeof $('#diversityRaceDivide').val() != 'undefined') {
      var diversityRaceDivide = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityRaceDivide',
          type: 'bar'
        },
        title: {
          text: 'Is there a social divide at Andover between students of different races or ethnicities?'
        },
        xAxis: {
          title: {
            text: 'Race'
          },
          categories: ['Caucasian', 'African-American/African', 'Asian-American/Asian', 'Native American', 'Hispanic', 'Pacific Islander', 'Middle Eastern', 'South Asian', 'Other', 'Student Body']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [59.74, 86.21, 80, 75, 63.33, 50, 75, 75, 67.39, 65.82]
        }, {
          name: 'No',
          data: [40.26, 13.79, 20, 25, 36.67, 50, 25, 25, 32.61, 34.18]
        }]
      });
    }

    // create diversityBullied chart in '#diversityBullied' if div exists
    if (typeof $('#diversityBullied').val() != 'undefined') {
      var diversityBullied = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityBullied',
          type: 'bar'
        },
        title: {
          text: 'Have you ever been bullied, hazed or actively excluded while at Andover?'
        },
        xAxis: {
          title: {
            text: 'Race'
          },
          categories: ['Caucasian', 'African-American/African', 'Asian-American/Asian', 'Native American', 'Hispanic', 'Pacific Islander', 'Middle Eastern', 'South Asian', 'Other', 'Student Body']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes',
          data: [21.82, 13.79, 10, 50, 3.33, 25, 25, 20, 32.61, 19.46]
        }, {
          name: 'No',
          data: [78.18, 86.21, 90, 50, 96.67, 75, 75, 80, 67.39, 80.54]
        }]
      });
    }

    // create diversitySocioEcoDivide chart in '#diversitySocioEcoDivide' if div exists
    if (typeof $('#diversitySocioEcoDivide').val() != 'undefined') {
      var diversitySocioEcoDivide = new Highcharts.Chart({
        chart: {
          renderTo: 'diversitySocioEcoDivide',
          type: 'pie'
        },
        title: {
          text: 'Is there a social divide at Andover between students of different socioeconomic backgrounds?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 49.21],
            ['No',  50.79]
          ]
        }]
      });
    }

    // create side-by-side diversityCliques charts in '#diversityCliquesYes' and '#diversityCliquesYes' if div exists
    if (typeof $('#diversityCliques').val() != 'undefined') {
      var diversityCliquesYes = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityCliquesYes',
          type: 'pie'
        },
        title: {
          text: 'Total Yes - 86.2%'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['2013', 28.81],
            ['2014', 32.48],
            ['2015', 22.94],
            ['2016', 15.78]
          ]
        }]
      });
      var diversityCliquesNo = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityCliquesNo',
          type: 'pie'
        },
        title: {
          text: 'Total No - 13.8%'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['2013', 24.14],
            ['2014', 20.69],
            ['2015', 32.18],
            ['2016', 22.99]
          ]
        }]
      });
    }

    // creates side-by-side diversityFeminist charts in '#diversityFeministYes' and '#diversityFeministNo' if the div exists
    if (typeof $('#diversityFeminist').val() != 'undefined') {
      var diversityFeministYes = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityFeministYes',
          type: 'pie'
        },
        title: {
          text: 'Total Yes - 78.6%'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Females', 81.82],
            ['Males',   74.91]
          ]
        }] 
      });
      var diversityFeministNo = new Highcharts.Chart({
        chart: {
          renderTo: 'diversityFeministNo',
          type: 'pie'
        },
        title: {
          text: 'Total No - 21.4%'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Females', 18.18],
            ['Males',   25.09]
          ]
        }] 
      });
    }
  /***** END DIVERSITY SECTION *****/

  /**********************************
   * GRAPHS FOR WELLNESS SECTION
   **********************************/
    // create wellnessSleepHrs in '#wellnessSleepHrs' if the div exists
    if (typeof $('#wellnessSleepHrs').val() != 'undefined') {
      var wellnessSleepHrs = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessSleepHrs',
          type: 'pie'
        },
        title: {
          text: 'On average, how many hours of sleep do you get per night?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['3 or fewer', 1.48],
            ['4',          2.82],
            ['5',          8.75],
            ['6',         29.23],
            ['7',         38.87],
            ['8',         15.43],
            ['9',          2.97],
            ['10 or more', 0.45]
          ]
        }]
      });
    }

    // create wellnessSleepByClass in '#wellnessSleepByClass' if the div exists
    if (typeof $('#wellnessSleepByClass').val() != 'undefined') {
      var wellnessSleepByClass = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessSleepByClass',
          type: 'bar'
        },
        title: {
          text: 'On average, how many hours of sleep do you get per night?'
        },
        xAxis: {
          title: {
            text: 'Class'
          },
          categories: ['2013', '2014', '2015', '2016']
        },
        yAxis: {
          title: {
            text: 'Hours of Sleep'
          }
        },
        series: [{
          name: 'Hours of Sleep',
          data: [6.52, 6.39, 6.79, 6.91]
        }]
      });
    }

    // create wellnessCommitments in '#wellnessCommitments' if the div exists
    if (typeof $('#wellnessCommitments').val() != 'undefined') {
      var wellnessCommitments = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessCommitments',
          type: 'pie'
        },
        title: {
          text: 'Have your time commitments at Andover (coursework, clubs, sports, homework) impacted your overall health?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 74.18],
            ['No',  25.82]
          ]
        }]
      });
    }

    // create wellnessPressure in '#wellnessPressure' if the div exists
    if (typeof $('#wellnessPressure').val() != 'undefined') {
      var wellnessPressure = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessPressure',
          type: 'pie'
        },
        title: {
          text: 'What is your greatest source of pressure?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['My own expectations', 66.62],
            ['My parents',          10.68],
            ['My peers',             8.01],
            ['My teachers',          6.08],
            ['Other',                4.45],
            ['Not under pressure',   4.15]
          ]
        }]
      });
    }

    // create wellnessSelfHarm in '#wellnessSelfHarm' if the div exists
    if (typeof $('#wellnessSelfHarm').val() != 'undefined') {
      var wellnessSelfHarm = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessSelfHarm',
          type: 'pie'
        },
        title: {
          text: 'Have you ever engaged in self-harm while at Andover?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 11.42],
            ['No',  88.58]
          ]
        }]
      });
    }

    // create wellnessEating in '#wellnessEating' if the div exists
    if (typeof $('#wellnessEating').val() != 'undefined') {
      var wellnessEating = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessEating',
          type: 'pie'
        },
        title: {
          text: 'Have you had an eating disorder while at Andover?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 14.84],
            ['No',  85.16]
          ]
        }]
      });
    }

    // create wellnessGraham in '#wellnessGraham' if the div exists
    if (typeof $('#wellnessGraham').val() != 'undefined') {
      var wellnessGraham = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessGraham',
          type: 'pie'
        },
        title: {
          text: 'Have you ever been to Graham House?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 36.35],
            ['No',  63.65]
          ]
        }]
      });
    }

    // create wellnessGrahamStigma in '#wellnessGrahamStigma' if the div exists
    if (typeof $('#wellnessGrahamStigma').val() != 'undefined') {
      var wellnessGrahamStigma = new Highcharts.Chart({
        chart: {
          renderTo: 'wellnessGrahamStigma',
          type: 'pie'
        },
        title: {
          text: 'Is there a social stigma associated with Graham House?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 75.67],
            ['No',  24.33]
          ]
        }]
      });
    }
  /***** END WELLNESS SECTION *****/

  /**********************************
   * GRAPHS FOR DRUGS SECTION
   **********************************/
    // create 2-by-2 drugsDrank2013, 2014, 2015, 2016 in '#drugsDrank' if the div exists
    if (typeof $('#drugsDrank').val() != 'undefined') {
      var drugsDrank2013 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsDrank2013',
          type: 'pie'
        },
        title: {
          text: 'Have you ever consumed alcohol?   (Class of 2013)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 81.11],
            ['No',  18.89]
          ]
        }]
      });
      var drugsDrank2014 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsDrank2014',
          type: 'pie'
        },
        title: {
          text: 'Have you ever consumed alcohol? (Class of 2014)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 67],
            ['No',  33]
          ]
        }]
      });
      var drugsDrank2015 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsDrank2015',
          type: 'pie'
        },
        title: {
          text: 'Have you ever consumed alcohol? (Class of 2015)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 54.72],
            ['No',  45.28]
          ]
        }]
      });
      var drugsDrank2016 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsDrank2016',
          type: 'pie'
        },
        title: {
          text: 'Have you ever consumed alcohol? (Class of 2016)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 44.95],
            ['No',  55.05]
          ]
        }]
      });
    }

    // create 2-by-2 drugsSmoked2013, 2014, 2015, 2016 in '#drugsSmoked' if the div exists
    if (typeof $('#drugsSmoked').val() != 'undefined') {
      var drugsSmoked2013 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsSmoked2013',
          type: 'pie'
        },
        title: {
          text: 'Have you ever used marijuana? (Class of 2013)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 48.89],
            ['No',  51.11]
          ]
        }]
      });
      var drugsSmoked2014 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsSmoked2014',
          type: 'pie'
        },
        title: {
          text: 'Have you ever used marijuana? (Class of 2014)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 32],
            ['No',  68]
          ]
        }]
      });
      var drugsSmoked2015 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsSmoked2015',
          type: 'pie'
        },
        title: {
          text: 'Have you ever used marijuana? (Class of 2015)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 19.50],
            ['No',  80.50]
          ]
        }]
      });
      var drugsSmoked2016 = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsSmoked2016',
          type: 'pie'
        },
        title: {
          text: 'Have you ever used marijuana? (Class of 2016)'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 18.35],
            ['No',  81.65]
          ]
        }]
      });
    }

    // create drugsSmokedVsHappy in '#drugsSmokedVsHappy' if the div exists
    if (typeof $('#drugsSmokedVsHappy').val() != 'undefined') {
      var drugsSmokedVsHappy = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsSmokedVsHappy',
          type: 'bar'
        },
        title: {
          text: 'Have you ever used marijuana?'
        },
        xAxis: {
          title: {
            text: 'Marijuana Usage'
          },
          categories: ['No', 'Yes, on and off campus', 'Yes, off campus', 'Yes, on campus']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Happy',
          data: [85.84, 76.47, 75.45, 62.50]
        }, {
          name: 'Not Happy',
          data: [14.16, 23.53, 24.55, 37.50]
        }]
      });
    }

    // create drugsHard in '#drugsHard' if the div exists
    if (typeof $('#drugsHard').val() != 'undefined') {
      var drugsHard = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsHard',
          type: 'pie'
        },
        title: {
          text: 'Have you ever used hallucinogens, narcotics or hard drugs?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes, on campus',           0.77],
            ['Yes, off campus',          3.86],
            ['Yes, on and off campus',   2.62],
            ['No',                      92.75]
          ]
        }]
      });
    }

    // create drugsStudy in '#drugsStudy' if the div exists
    if (typeof $('#drugsStudy').val() != 'undefined') {
      var drugsStudy = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsStudy',
          type: 'pie'
        },
        title: {
          text: 'Have you ever used study drugs for which you did not have your own prescription?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes, on campus',           3.55],
            ['Yes, off campus',          1.23],
            ['Yes, on and off campus',   3.24],
            ['No',                      91.98]
          ]
        }]
      });
    }

    // create drugsCaffeine in '#drugsCaffeine' if the div exists
    if (typeof $('#drugsCaffeine').val() != 'undefined') {
      var drugsCaffeine = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsCaffeine',
          type: 'pie'
        },
        title: {
          text: 'Which caffeinated beverage do you drink the most?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Coffee',                           41.20],
            ['Tea',                              21.91],
            ['Energy Drinks',                     5.86],
            ['5-Hour Energy or similar products', 2.01],
            ['None',                             29.01]
          ]
        }]
      });
    }

    // create drugsCaffeineFreq  in '#drugsCaffeineFreq' if the div exists
    if (typeof $('#drugsCaffeineFreq').val() != 'undefined') {
      var drugsCaffeineFreq = new Highcharts.Chart({
        chart: {
          renderTo: 'drugsCaffeineFreq',
          type: 'bar'
        },
        title: {
          text: 'How often do you drink caffeinated beverages?'
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
          name: 'Never',
          data: [15, 15.50, 28.93, 23.85]
        }, {
          name: 'Once a week or less',
          data: [26.67, 24, 34.59, 29.36]
        }, {
          name: 'A few times a week',
          data: [23.89, 27.50, 21.38, 27.52]
        }, {
          name: 'Once a day',
          data: [16.11, 18.50, 7.55, 7.34]
        }, {
          name: 'Several times per day',
          data: [18.33, 14.50, 7.55, 11.93]
        }]
      });
    }
  /***** END DRUGS SECTION *****/

  /**********************************
   * GRAPHS FOR LEADERSHIP SECTION
   **********************************/
    // create leadershipByGender in '#leadershipByGender' if the div exists
    if (typeof $('#leadershipByGender').val() != 'undefined') {
        var leadershipByGender = new Highcharts.Chart({
          chart: {
            renderTo: 'leadershipByGender',
            type: 'bar'
          },
          title: {
            text: 'Do you consider yourself a leader on campus?'
          },
          xAxis: {
            title: {
              text: 'Gender'
            },
            categories: ['Female', 'Male']
          },
          yAxis: {
            title: {
              text: 'Percent of Students'
            }
          },
          series: [{
            name: 'Yes',
            data: [54.88, 45.12]
          }, {
            name: 'No',
            data: [54.25, 45.75]
          }]
        });
    }

    // create leadershipByClass in '#leadershipByClass' if the div exists
    if (typeof $('#leadershipByClass').val() != 'undefined') {
        var leadershipByClass = new Highcharts.Chart({
          chart: {
            renderTo: 'leadershipByClass',
            type: 'bar'
          },
          title: {
            text: 'Do you consider yourself a leader on campus?'
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
            name: 'Yes',
            data: [33.51, 34.83, 21.90, 9.76]
          }, {
            name: 'No',
            data: [20.26, 25.49, 28.43, 25.82]
          }]
        });
    }

    // create leadershipPositionsByGender in '#leadershipPositionsByGender' if the div exists
    if (typeof $('#leadershipPositionsByGender').val() != 'undefined') {
        var leadershipPositionsByGender = new Highcharts.Chart({
          chart: {
            renderTo: 'leadershipPositionsByGender',
            type: 'bar'
          },
          title: {
            text: 'How many leadership positions have you gotten?'
          },
          xAxis: {
            title: {
              text: 'Gender'
            },
            categories: ['Female', 'Male']
          },
          yAxis: {
            title: {
              text: 'Percent of Students'
            }
          },
          series: [{
            name: '0',
            data: [29.68, 37.94]
          }, {
            name: '1',
            data: [20.3, 21.54]
          }, {
            name: '2',
            data: [21.12, 18.65]
          }, {
            name: '3',
            data: [16.58, 12.86]
          }, {
            name: '4',
            data: [6.42, 5.14]
          }, {
            name: '5+',
            data: [5.88, 3.86]
          }]
        });
    }

    // create leadershipGenderDetermined in '#leadershipGenderDetermined' if the div exists
    if (typeof $('#leadershipGenderDetermined').val() != 'undefined') {
        var leadershipGenderDetermined = new Highcharts.Chart({
          chart: {
            renderTo: 'leadershipGenderDetermined',
            type: 'bar'
          },
          title: {
            text: 'Do you think gender plays a role in determining campus leadership roles?'
          },
          xAxis: {
            title: {
              text: 'Gender'
            },
            categories: ['Female', 'Male']
          },
          yAxis: {
            title: {
              text: 'Percent of Students'
            }
          },
          series: [{
            name: 'Yes',
            data: [67.16, 39.52]
          }, {
            name: 'No',
            data: [32.84, 60.48]
          }]
        });
    }
  /***** END LEADERSHIP SECTION *****/

  /**********************************
   * GRAPHS FOR SEX SECTION
   **********************************/
    // create sexHookUpPressure in '#sexHookUpPressure' if the div exists
    if (typeof $('#sexHookUpPressure').val() != 'undefined') {
      var sexHookUpPressure = new Highcharts.Chart({
        chart: {
          renderTo: 'sexHookUpPressure',
          type: 'pie'
        },
        title: {
          text: 'Do you feel pressured to participate in Andover\'s \"hook-up\" culture?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 31.50],
            ['No',  68.50]
          ]
        }]
      });
    }

    // create side-by-side sexPornByGender and sexPornByClass in '#sexPorn' if the div exists
    if (typeof $('#sexPorn').val() != 'undefined') {
      var sexPornByGender = new Highcharts.Chart({
        chart: {
          renderTo: 'sexPornByGender',
          type: 'bar'
        },
        title: {
          text: 'Have you ever watched pornography?'
        },
        xAxis: {
          title: {
            text: 'Gender'
          },
          categories: ['Female', 'Male']
        },
        yAxis: {
          title: {
            text: 'Percent of Students'
          }
        },
        series: [{
          name: 'Yes, on campus',
          data: [2.25, 6.38]
        }, {
          name: 'Yes, off campus',
          data: [10.67, 25.50]
        }, {
          name: 'Yes, on and off campus',
          data: [12.92, 54.36]
        }, {
          name: 'No',
          data: [74.16, 13.76]
        }]
      });
      var sexPornByClass = new Highcharts.Chart({
        chart: {
          renderTo: 'sexPornByClass',
          type: 'bar'
        },
        title: {
          text: 'Have you ever watched pornography?'
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
          name: 'Yes, on campus',
          data: [4.95, 3.47, 5, 2.73]
        }, {
          name: 'Yes, off campus',
          data: [20.33, 14.36, 15.63, 20.91]
        }, {
          name: 'Yes, on and off campus',
          data: [39.01, 37.62, 30.63, 10.91]
        }, {
          name: 'No',
          data: [35.71, 44.55, 48.75, 65.45]
        }]
      });
    }

    // create side-by-side sexHad and sexHadByClass in '#sex' if the div exists
    if (typeof $('#sex').val() != 'undefined') {
      var sexHad = new Highcharts.Chart({
        chart: {
          renderTo: 'sexHad',
          type: 'pie'
        },
        title: {
          text: 'Have you ever had sex?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 28.13],
            ['No',  71.87]
          ]
        }]
      });
      var sexHadByClass = new Highcharts.Chart({
        chart: {
          renderTo: 'sexHadByClass',
          type: 'bar'
        },
        title: {
          text: 'Have you ever had sex?'
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
          name: 'Yes',
          data: [46.70, 29.21, 19.38, 8.18]
        }, {
          name: 'No',
          data: [53.30, 70.79, 80.63, 91.82]
        }]
      });
    }

    // create side-by-side sexHadOral and sexHadOralByClass in '#sexOral' if the div exists
    if (typeof $('#sexOral').val() != 'undefined') {
      var sexHadOral = new Highcharts.Chart({
        chart: {
          renderTo: 'sexHadOral',
          type: 'pie'
        },
        title: {
          text: 'Have you ever engaged in oral sex?'
        },
        series: [{
          name: 'Percent of Students',
          data: [
            ['Yes', 42.20],
            ['No',  57.80]
          ]
        }]
      });
      var sexHadOralByClass = new Highcharts.Chart({
        chart: {
          renderTo: 'sexHadOralByClass',
          type: 'bar'
        },
        title: {
          text: 'Have you ever engaged in oral sex?'
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
          name: 'Yes',
          data: [60.99, 44.06, 33.13, 20.91]
        }, {
          name: 'No',
          data: [39.01, 55.94, 66.88, 79.09]
        }]
      });
    }
  /***** END SEX SECTION *****/
});