// import zip.js libraries
import * as zip from "https://deno.land/x/zipjs/index.js"

// div where tree will be created
let handler = document.getElementById('handler')

// big blue choose file button handler
document.getElementById('file-button').onclick = function(e){
    document.getElementById('file').click()
}

// on input value change, the file will be read
document.getElementById('file').onchange = function(e){
    readFile(e.target.files[0])
}

// prevent browser from downloading file when dragged and dropped
handler.ondragover = function(e){
    e.preventDefault()
}

// accepts dropped file and reads it
handler.ondrop = function(e){
    e.preventDefault()
    let file = e.dataTransfer.items[0].getAsFile()
    if(file.type === 'application/x-zip-compressed')
        readFile(file)
    else
        alert('Only zip files accepted')
}

// contact button handling
document.getElementById('contact-button').onclick = function(e){
    e.preventDefault()
    let el = document.getElementById('contact')
    let opacity = 0.0
    el.style.opacity = opacity
    el.style.display = 'flex'
    let myInterval = setInterval(() => {
        opacity += 0.1
        el.style.opacity = opacity
        if(opacity >= 1.0)
            stopInterval()
    }, 10)

    function stopInterval(){
        clearInterval(myInterval)
    }
}

document.getElementById('close-contact').onclick = function(){
    closeContact()
}

function closeContact(){
    let el = document.getElementById('contact')
    let opacity = 1.0
    el.style.opacity = opacity
    let myInterval = setInterval(() => {
        opacity -= 0.1
        el.style.opacity = opacity
        if(opacity <= 0.0)
            stopInterval()
    }, 10)
    
    function stopInterval(){
        clearInterval(myInterval)
        el.style.display = 'none'
    }
}

// languages button handling
document.getElementById('language-button').onclick = function(e){
    e.preventDefault()
    let el = document.getElementById('language')
    let opacity = 0.0
    el.style.opacity = opacity
    el.style.display = 'flex'
    let myInterval = setInterval(() => {
        opacity += 0.1
        el.style.opacity = opacity
        if(opacity >= 1.0)
            stopInterval()
    }, 10)

    function stopInterval(){
        clearInterval(myInterval)
    }
}

document.getElementById('close-language').onclick = function(){
    closeLanguage()
}

function closeLanguage(){
    let el = document.getElementById('language')
    let opacity = 1.0
    el.style.opacity = opacity
    let myInterval = setInterval(() => {
        opacity -= 0.1
        el.style.opacity = opacity
        if(opacity <= 0.0)
            stopInterval()
    }, 10)
    
    function stopInterval(){
        clearInterval(myInterval)
        el.style.display = 'none'
    }
}

// login button handling
document.getElementById('login-button').onclick = function(e){
    e.preventDefault()
    let el = document.getElementById('login')
    let opacity = 0.0
    el.style.opacity = opacity
    el.style.display = 'flex'
    let myInterval = setInterval(() => {
        opacity += 0.1
        el.style.opacity = opacity
        if(opacity >= 1.0)
            stopInterval()
    }, 10)

    function stopInterval(){
        clearInterval(myInterval)
    }
}

document.getElementById('close-login').onclick = function(){
    closeLogin()
}

function closeLogin(){
    let el = document.getElementById('login')
    let opacity = 1.0
    el.style.opacity = opacity
    let myInterval = setInterval(() => {
        opacity -= 0.1
        el.style.opacity = opacity
        if(opacity <= 0.0)
            stopInterval()
    }, 10)
    
    function stopInterval(){
        clearInterval(myInterval)
        el.style.display = 'none'
        document.getElementById('heading').innerText = 'Create an Account'
        document.getElementById('submit').innerText = 'Create an Account'
        document.getElementById('label-2').innerHTML = 'By creating an account you agree to our <a href="https://extract.me/legal">Privacy & Terms</a>'
        document.getElementById('toggler').innerHTML = "Already have an account? <a href='#'>Log in</a>"
    }
}

// reset button handling
document.getElementById('close-reset').onclick = function(){
    let el = document.getElementById('reset-password')
    let opacity = 1.0
    el.style.opacity = opacity
    let myInterval = setInterval(() => {
        opacity -= 0.1
        el.style.opacity = opacity
        if(opacity <= 0.0)
            stopInterval()
    }, 10)
    
    function stopInterval(){
        clearInterval(myInterval)
        el.style.display = 'none'
        document.getElementById('heading').innerText = 'Create an Account'
        document.getElementById('submit').innerText = 'Create an Account'
        document.getElementById('label-2').innerHTML = 'By creating an account you agree to our <a href="https://extract.me/legal">Privacy & Terms</a>'
        document.getElementById('toggler').innerHTML = "Already have an account? <a href='#'>Log in</a>"
    }
}

document.getElementById('log-in-link').onclick = function(e){
    e.preventDefault()
    document.getElementById('reset-password').style.display = 'none'
    document.getElementById('login').style.display = 'flex'
}

document.onkeydown = function(e){
    if(e.code === 'Escape'){
        if(document.getElementById('contact').style.display === 'flex')
            closeContact()
        else if(document.getElementById('language').style.display === 'flex')
            closeLanguage()
        else if(document.getElementById('login').style.display === 'flex')
            closeLogin()
    }
}

// toggle login form values
document.getElementById('toggler').onclick = function(e){
    e.preventDefault()
    if(e.target.innerText === 'Log in'){
        document.getElementById('heading').innerText = 'Log in'
        document.getElementById('submit').innerText = 'Log in'
        document.getElementById('label-2').innerHTML = '<a href="#" class="link" id="forgot-password">Forgot password?'
        document.getElementById('toggler').innerHTML = "Don't have an account? <a href='#'>Sign up</a>"
        document.getElementById('forgot-password').onclick = function(e){
            e.preventDefault()
            document.getElementById('reset-password').style.opacity = 1
            document.getElementById('login').style.display = 'none'
            document.getElementById('reset-password').style.display = 'flex'
        }
    }else{
        document.getElementById('heading').innerText = 'Create an Account'
        document.getElementById('submit').innerText = 'Create an Account'
        document.getElementById('label-2').innerHTML = 'By creating an account you agree to our <a href="https://extract.me/legal">Privacy & Terms</a>'
        document.getElementById('toggler').innerHTML = "Already have an account? <a href='#'>Log in</a>"
    }
}

// toggling password eye
document.getElementById('eye').onclick = function(e){
    if(e.target.classList.contains('selected')){
        e.target.classList.remove('selected')
        document.getElementById('password').setAttribute('type', 'password')
    }else{
        e.target.classList.add('selected')
        document.getElementById('password').setAttribute('type', 'text')
    }
}

// form button handling
document.getElementById('form').oninput = function(e){
    let inp = document.getElementById('form').getElementsByTagName('input')
    if(inp[0].value !== '' && inp[1].value !== '')
        document.getElementById('submit').disabled = false
    else
        document.getElementById('submit').disabled = true
}

// url input handling
document.getElementById('url').onclick = function(e){
    // accepting url
    let url = prompt("Open file from URL", "https://")

    // checking if user clicked on 'ok' and not 'cancel'
    if(url !== null){
        alert('Cross Origin Request Blocked!')
    }
}

// zip file reading function
async function readFile(file){
    // creating ZipReader object from BlobReader object of zip file
    const reader = new zip.ZipReader(new zip.BlobReader(file))
    
    // getting data of all folders and files from the zip file
    const entries = await reader.getEntries()
    let arr = []
    let fileArr = new Map()
    
    // traversing through the folders and files
    for(let en in entries){
        if(!entries[en].filename.endsWith('/'))
            fileArr.set(entries[en].filename, entries[en])
        arr.push(entries[en].filename) // adding all the folder and file names to an array
    }
    // breaking down paths (e.g. folder1/folder2/folder3/file.exe => folder1/, folder1/folder2/, folder1/folder2/folder3/, folder1/folder2/folder3/file.exe)
    arr.sort(naturalSort())
    let farr = addToArray(arr)

    // creating file tree layout in the DOM
    createLayout(farr, file, fileArr)

    //closing reader
    await reader.close()
}


// breaking down paths
function addToArray(arr){
    let farr = []

    // traversing through the array of paths
    for(let str=0; str < arr.length; str++){
        let c = '' // using variable c to store paths part by part
        
        // traversing individual paths
        for(let i=0; i<arr[str].length; i++){
            c = c + arr[str].charAt(i)

            // checking if end of a path
            if(arr[str].charAt(i)=='/')
                if(!farr.includes(c)) // checks if this path is not already in the array
                    farr.push(c)
        }

        // checks if path is for a file (not folder!)
        if(!arr[str].endsWith('/'))
            farr.push(arr[str])
    }
    return farr
}

// generates unordered list for visualizing the tree with jsTree
function createTree(arr){
    // using stack to store ul element
    let stack = []
    let ul = document.createElement('ul')
    let c = -1
    // traversing through the list of paths
    for(let index = 0; index < arr.length; index++){
        if(arr[index].endsWith('/') && count(arr[index]) === c){
            ul = stack[stack.length-1]
            stack.pop()
        }

        // counting number of '/' in the path to check depth of path
        c = count(arr[index])

        // making sure ul is at same depth as path
        while(stack.length > c){
            ul = stack[stack.length-1]
            stack.pop()
        }

        // check if path is a folder
        if(arr[index].endsWith('/')){
            let li = document.createElement('li')
            
            // setting tree to open by default
            li.classList.add('jstree-open')
            li.innerText = arr[index].substring(0, arr[index].length-1).split('/').splice(-1)[0]
            ul.appendChild(li)
            
            // storing ul for backtracking later
            stack.push(ul)
            ul = document.createElement('ul')
            li.appendChild(ul)
        }else{
            // else if path is a file
            let li = document.createElement('li')
            let text = arr[index].split('/').splice(-1)[0]
            li.innerText = text
            let iconClass = 'bi bi-file-earmark'
            let fileTypeList = ['aac','ai','bmp','cs','css','csv','doc','docx','exe','gif','heic','html','java','jpg','js','json','jsx','key','m4p','md','mdx','mov','mp3','mp4','otf','pdf','php','png','ppt','pptx','psd','py','raw','rb','sass','scss','sh','sql','svg','tiff','tsx','ttf','txt','wav','woff','xls','xlsx','xml','yml']
            if(fileTypeList.includes(text.split('.').splice(-1)[0]))
                iconClass = `bi bi-filetype-${text.split('.').splice(-1)[0]}`
            li.setAttribute('data-path', arr[index])
            li.setAttribute('data-jstree', `{"icon": "${iconClass}"}`)
            ul.appendChild(li)
        }
    }
    ul = stack.length?stack[0]:ul
    return ul
}

// function to count number of '/'s in path
function count(item){
    let c = 0
    for(let letter in item){
        if(item[letter]==='/')
            c++
    }
    return c
}

// function to create layout for tree
function createLayout(farr, file, fileArr){
    // resetting data inside div
    handler.innerHTML = ''
    handler.classList = 'tree'
    
    // creating layout

    let header = document.createElement('div')
    header.innerHTML = 'Archive successfully extracted'
    header.classList = 'heading'
    handler.appendChild(header)

    let label = document.createElement('div')
    label.innerHTML = 'Click on a file to download it'
    label.classList = 'label'
    handler.appendChild(label)

    let but = document.createElement('a')
    but.innerHTML = '<i class="bi bi-download"></i> Save all as ZIP'
    but.classList = 'save-button'
    but.href = URL.createObjectURL(new Blob([file]))
    but.download = file.name
    handler.appendChild(but)

    let filename = document.createElement('div')
    filename.classList = 'filename'
    filename.innerHTML = file.name
    handler.appendChild(filename)

    let tree = document.createElement('div')
    tree.setAttribute('id', 'jstree')

    tree.appendChild(createTree(farr))
    handler.appendChild(tree)

    let buttonHolder = document.createElement('div')
    buttonHolder.classList = 'button-holder'
    
    let backButton = document.createElement('button')
    backButton.innerHTML = '<i class="bi bi-arrow-left"></i> Extract another archive'
    buttonHolder.appendChild(backButton)
    backButton.onclick = function(){
        window.location.href = 'https://archive-extract.netlify.app/'
    }
    
    let rateButton = document.createElement('button')
    rateButton.innerHTML = '<i class="bi bi-heart-fill"></i> Rate Us'
    buttonHolder.appendChild(rateButton)
    rateButton.onclick = function(){
        window.location.href = 'https://chrome.google.com/webstore/detail/video-recorder/nknadlalodfadgegkigkmbhofcmkhfnc/reviews'
    }
    
    handler.appendChild(buttonHolder)
    
    // creating jsTree instance
    $('#jstree').on('changed.jstree', function(e, data){
        if(document.getElementById(data.node.id).classList.contains('jstree-leaf'))
            download(fileArr.get(data.node.data.path), document.getElementById(data.node.a_attr.id))
    }).jstree()
}

async function download(entry, a) {
    try {
        const blobURL = await getURL(entry)
        a.href = blobURL
        a.download = entry.filename.split('/').splice(-1)[0]
        const clickEvent = new MouseEvent("click")
        a.dispatchEvent(clickEvent)
    } catch (error) {
        console.log(error)
    }
}

async function getURL(entry) {
    return URL.createObjectURL(await entry.getData(new zip.BlobWriter()));
}

// mobile responsiveness

// burger events
document.getElementById('burger').onclick = function(e){
    if(e.target.classList.contains('bi-x')){
        e.target.classList.remove('bi-x')
        e.target.classList.add('bi-burger')
        document.getElementsByClassName('navmenu')[0].style.display = 'none'
    }else{
        e.target.classList.remove('bi-burger')
        e.target.classList.add('bi-x')
        document.getElementsByClassName('navmenu')[0].style.display = 'block'
        let list = document.getElementsByClassName('list')
        for(let i=0; i<list.length; i++){
            list[i].querySelector('a').onclick = function(e){
                e.preventDefault()
            }
            list[i].onclick = function(e){
                if(window.screen.width<895){
                    let el = list[i].getElementsByClassName('navsubmenu')[0]
                    let rotate = list[i].getElementsByClassName('rotate')[0]
                    if(el.style.display === 'none'){
                        el.style.display = 'block'
                        rotate.style.transform = 'rotate(180deg)'
                    }
                    else{
                        el.style.display = 'none'
                        rotate.style.transform = 'rotate(0deg)'
                    }
                }
            }
        }
    }
}

// window resize fix for dissappearing navmenu

// window.onresize = function(e){
//     if(window.screen.width >= 895)
//         document.getElementsByClassName('navmenu')[0].style.display = 'block'
//     else{
//         document.getElementsByClassName('navmenu')[0].style.display = 'none'
//         let burger = document.getElementById('burger')
//         if(burger.classList.contains('bi-x')){
//             burger.classList.remove('bi-x')
//             burger.classList.add('bi-list')
//         }
//         let list = document.getElementsByClassName('list')
//         for(let i=0; i<list.length; i++){
//             list[i].getElementsByClassName('rotate')[0].removeAttribute('style')
//             list[i].getElementsByClassName('navsubmenu')[0].removeAttribute('style')
//             list[i].removeAttribute('style')
//         }
//     }
// }