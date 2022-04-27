const read = document.getElementById('read')
const more = document.getElementById('more')
const finish = document.getElementById('finish')

const read1 = document.getElementById('read1')
const more1 = document.getElementById('more1')
const finish1 = document.getElementById('finish1')

const read2 = document.getElementById('read2')
const more2 = document.getElementById('more2')
const finish2 = document.getElementById('finish2')

const read3 = document.getElementById('read3')
const more3 = document.getElementById('more3')
const finish3 = document.getElementById('finish3')

const read4 = document.getElementById('read4')
const more4 = document.getElementById('more4')
const finish4 = document.getElementById('finish4')


read.addEventListener('click', readHide);
finish.addEventListener('click', Readfinish)

read1.addEventListener('click', readHide1);
finish1.addEventListener('click', Readfinish1)

read2.addEventListener('click', readHide2);
finish2.addEventListener('click', Readfinish2)

read3.addEventListener('click', readHide3);
finish3.addEventListener('click', Readfinish3)

read4.addEventListener('click', readHide4);
finish4.addEventListener('click', Readfinish4)


function readHide() {
    read.classList.add('hidden');
    ReadMore()
}


function ReadMore() {
    more.classList.remove('hidden')
    finish.classList.remove('hidden')

}

function Readfinish() {
    more.classList.add('hidden')
    finish.classList.add('hidden')
    read.classList.remove('hidden');
}




function readHide1() {
    read1.classList.add('hidden');
    ReadMore1()
}


function ReadMore1() {
    more1.classList.remove('hidden')
    finish1.classList.remove('hidden')

}

function Readfinish1() {
    more1.classList.add('hidden')
    finish1.classList.add('hidden')
    read1.classList.remove('hidden');
}



function readHide2() {
    read2.classList.add('hidden');
    ReadMore2()
}


function ReadMore2() {
    more2.classList.remove('hidden')
    finish2.classList.remove('hidden')

}

function Readfinish2() {
    more2.classList.add('hidden')
    finish2.classList.add('hidden')
    read2.classList.remove('hidden');
}

function readHide3() {
    read3.classList.add('hidden');
    ReadMore3()
}


function ReadMore3() {
    more3.classList.remove('hidden')
    finish3.classList.remove('hidden')

}

function Readfinish3() {
    more3.classList.add('hidden')
    finish3.classList.add('hidden')
    read3.classList.remove('hidden');
}

function readHide4() {
    read4.classList.add('hidden');
    ReadMore4()
}


function ReadMore4() {
    more4.classList.remove('hidden')
    finish4.classList.remove('hidden')

}

function Readfinish4() {
    more4.classList.add('hidden')
    finish4.classList.add('hidden')
    read4.classList.remove('hidden');
}