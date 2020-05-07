
  $(document).ready(function(){
    $('ul.tabs').tabs();
      $('.menu-drop-btn').dropdown({
          inDuration: 300,
          outDuration: 225,
          constrainWidth: false, // Does not change width of dropdown to that of the activator
          hover: true, // Activate on hover
          gutter: 0, // Spacing from edge
          belowOrigin: false, // Displays dropdown below the button
          alignment: 'left', // Displays dropdown with edge aligned to the left of button
          stopPropagation: false // Stops event propagation
        }
      );
      $('.menu-drop-btn-desktop').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrainWidth: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false, // Displays dropdown below the button
        alignment: 'left', // Displays dropdown with edge aligned to the left of button
        stopPropagation: false // Stops event propagation
      }
    );
      //for modal
      $('.modal').modal();
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 40, // Creates a dropdown of 15 years to control year,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false, // Close upon selecting a date,
      container: undefined // ex. 'body' will append picker to body
    });
    $('select').material_select();
    
    $('.chips').material_chip();
    $('.chips-placeholder').material_chip({
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
    });
    $('.chips-autocomplete').material_chip({
      autocompleteOptions: {
        data: {
          'Apple': null,
          'Microsoft': null,
          'Google': null,
          'Music': null,
          'Action': null,
          'Movies': null,
          'Dance video': null,
          'Politics': null,
          'Wild life': null,
          'Nature': null,
          'Commedy': null,
          'Documentaries': null,
          'Education': null,
          'Science': null,
          'Biology': null,
          'Chemistry': null,
          'Physics': null,
          'Mathematics': null,
          'Literature': null,
          'English': null,
          'Accounts': null,
          'Presentation': null,
          'Victoria falls': null,
          'Religious education': null,
          'Women': null,
          'Men': null,
          'Crime': null,
          'Bikes': null,
          'Tools': null,
          'Weapons': null,
          'Advice': null,
          'Bible': null,
          'Religius': null,
          'God': null,
          'Jesus': null,
          'Drugs': null,
          'Jesus': null,
          'Schools': null,
          'Medicine': null,
        },
        limit: Infinity,
        minLength: 1
      }
    });
       
  });
