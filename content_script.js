// code modified from @danksinker's Tiny Hands extension (https://github.com/sinker/tinyhands)

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/@buzzfeed/gi, '@FailingPileOfGarbage');
            var finalText = replacedText.replace(/buzzfeed/gi, 'Failing Pile of Garbage');
            if (finalText !== text) {
                element.replaceChild(document.createTextNode(finalText), node);
            }
        }
    }


}