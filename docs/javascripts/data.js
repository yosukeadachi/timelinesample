var vueApp = new Vue({
    el: '#vueApp',
    data: {
      entries: []
    }
  });

var timeLineData = JSON.parse('[{"datetime" : "2/24 10:00","name1Written" : "松風苑","category" : ["泊まる", "遊ぶ", "温泉", "旅館"],"descs" : ""},{"datetime" : "2/25 10:00","name1Written" : "大仁温泉","category" : ["遊ぶ", "温泉"],"descs" : "大仁駅付近を中心に数軒の温泉宿が点在する、伊豆の穴場的存在。近くには花や鳥とフラの楽園「IZU・WORLD みんなのHawaiians」がある。"},{"datetime" : "2/26 10:00","name1Written" : "松風苑","category" : ["遊ぶ", "温泉"],"descs" : "JR外房線勝浦駅からバス15分ほどの田園地帯にある宿。"}]');
vueApp.entries = timeLineData;
