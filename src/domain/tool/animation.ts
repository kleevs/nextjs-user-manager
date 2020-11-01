//https://daneden.github.io/animate.css/

function addClass(element: Element, name: string) {
    var arr;
    arr = element.className.split(" ").filter(_ => _);
    if (arr.indexOf(name) == -1) {
		arr.push(name);
	}
	
	element.className = arr.join(" ");
}

function removeClass(element: Element, name: string) {
    var regex = new RegExp(`\\b${name}\\b`, "g");
    element.className = element.className.replace(regex, "");
}

export function run(element: Element, animationName: string): Promise<void> {
    return new Promise((resolve) => { 
        var listener,
            animationEnd = (function(el) {
            var animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (var t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        addClass(element, 'animated');
        addClass(element, animationName);
        element.addEventListener(animationEnd, listener = () => {
            removeClass(element, 'animated');
            removeClass(element, animationName);
            element.removeEventListener(animationEnd, listener);
            resolve();
        });
    });
}