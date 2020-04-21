
  
    // Enable pusher logging - don't include this in production
    // Pusher.logToConsole = true;

    var pusher = new Pusher('8757fa8b9d80a2c77f4b');
    var tell;
    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', function(data) {
      // console.log(data)
      if(data.message.status == 'plural'){
      $.each(data.message.message, function (i) {
        myChart.data.labels.push(data.message.message[i].created_at);
        myChart.data.datasets[0].data.push(data.message.message[i].temperature);
        myChart.data.datasets[1].data.push(data.message.message[i].humidity);
        myChart.data.datasets[2].data.push(data.message.message[i].rain);
        myChart.data.datasets[3].data.push(data.message.message[i].moisture);
        myChart.data.datasets[4].data.push(data.message.message[i].light);
        myChart.update();
      })
      $('#temp_val').html(data.message.singleData.temperature)
      $('#humidity_val').html(data.message.singleData.humidity)
      $('#light_val').html(data.message.singleData.light)
      $('#rain_val').html(data.message.singleData.rain)
      $('#moisture_val').html(data.message.singleData.moisture)

    }else if(data.message.status == 'single'){
      myChart.data.labels.push(data.message.message.created_at);
      myChart.data.datasets[0].data.push(data.message.message.temperature);
      myChart.data.datasets[1].data.push(data.message.message.humidity);
      myChart.data.datasets[2].data.push(data.message.message.rain);
      myChart.data.datasets[3].data.push(data.message.message.moisture);
      myChart.data.datasets[4].data.push(data.message.message.light);
      myChart.update();

      $('#temp_val').html(data.message.message.temperature)
      $('#humidity_val').html(data.message.message.humidity)
      $('#light_val').html(data.message.message.light)
      $('#rain_val').html(data.message.message.rain)
      $('#moisture_val').html(data.message.message.moisture)

    }    
      
    });












        // console.log(data.message[i].temperature)
        // console.log(data.message[i].humidity)
        // console.log(data.message[i].rain);
        // console.log(data.message[i].light);
        // console.log(data.message[i].moisture);