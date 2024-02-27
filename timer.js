countDown();
        function countDown() {
            function addZero(i) {
                return i < 10 ? "0" + i : i;
            }
            let activityText = document.querySelector('#activityText');
            let timer = null;
            const startTime = new Date('2024-2-27 00:00:00');
            const endTime = new Date('2024-3-3 23:59:59');
            const nowTime = new Date();
            const beginDiff = parseInt((startTime.getTime() - nowTime.getTime()) / 1000);
            const endDiff = parseInt((endTime.getTime() - nowTime.getTime()) / 1000);
            const leftTime = beginDiff > 0 ? beginDiff : endDiff;
            let day = parseInt(leftTime / (24 * 60 * 60))
            let hour = parseInt(leftTime / (60 * 60) % 24);
            let minute = parseInt(leftTime / 60 % 60);
            let second = parseInt(leftTime % 60);
            day = addZero(day);
            hour = addZero(hour);
            minute = addZero(minute);
            second = addZero(second);

            if (beginDiff > 0) {
                activityText.innerHTML =
                `
                <div style="display:flex;justify-content:space-evenly;text-align:center;font-size:18px;font-family:Helvetica;">
                <div><div style="width:50px;height:50px;line-height:50px;background-color:lightgray;border-radius:20px;margin:0 auto;">${day}</div>Days</div>
                <div><div style="width:50px;height:50px;line-height:50px;;background-color:lightgray;border-radius:20px;margin:0 auto;">${hour}</div>Hours</div>
                <div><div style="width:50px;height:50px;line-height:50px;;background-color:lightgray;border-radius:20px;margin:0 auto;">${minute}</div>Minutes</div>
                <div><div style="width:50px;height:50px;line-height:50px;;background-color:lightgray;border-radius:20px;margin:0 auto;">${second}</div>Seconds</div>
                </div>
                `;
                timer = setTimeout(countDown, 1000);
            } else if (leftTime <= 0) {
                activityText.innerText = '活动已结束！更多优惠请在线咨询';
                clearTimeout(timer);
            } else {
                activityText.innerHTML =
                `
                <div style="display:flex;justify-content:space-evenly;text-align:center;font-size:21px;font-family:Helvetica;">
                <div><div style="width:50px;height:50px;line-height:50px;background-color:lightgray;border-radius:20px;margin:0 auto;">${day}</div>Days</div>
                <div><div style="width:50px;height:50px;line-height:50px;background-color:lightgray;border-radius:20px;margin:0 auto;">${hour}</div>Hours</div>
                <div><div style="width:50px;height:50px;line-height:50px;background-color:lightgray;border-radius:20px;margin:0 auto;">${minute}</div>Minutes</div>
                <div><div style="width:50px;height:50px;line-height:50px;background-color:lightgray;border-radius:20px;margin:0 auto;">${second}</div>Seconds</div>
                </div>
                `;
                timer = setTimeout(countDown, 1000);
            }
        }
