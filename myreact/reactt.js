function customRender(rc,cont) {
    const domElement = document.createElement(rc.type)
    domElement.innerHTML=rc.children
    // domElement.setAttribute('href', rc.props.href)
    // domElement.setAttribute('target',rc.props.target)
    for (const prop in rc.props) {
        if (prop === 'children')
            continue;
        domElement.setAttribute(prop,rc.props[prop])

  
}
cont.appendChild(domElement)
}

const reactElement={
    type:'a',
    props: {
        href:"https://google.com",
        target: "_blank"
     },
     children: 'Click me to visit google'
}

const root= document.querySelector('#root')


customRender(reactElement, root)

