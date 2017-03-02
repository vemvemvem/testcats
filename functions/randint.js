function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

var randomLength = randomIntFromInterval(1,4)

module.exports = randomLength