$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false,
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
    stopPropagation: false // Stops event propagation
});