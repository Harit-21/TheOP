var div = document.getElementById('starry');
    var display = 1;

    function hidenshow()
    {
      if(display == 1)
      {
        div.style.display = 'block';
        display = 0;
      }
      else
      {
        div.style.display = 'none';
        display = 1;
      }
    }