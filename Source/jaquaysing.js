walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bXandering\b/g, "Jaquaysing");
	v = v.replace(/\bXandered\b/g, "Jaquaysed");
	v = v.replace(/\bXanders\b/g, "Jaquayses");
	v = v.replace(/\bXander\b/g, "Jaquays");
	v = v.replace(/\bxandering\b/g, "jaquaysing");
	v = v.replace(/\bxandered\b/g, "jaquaysed");
	v = v.replace(/\bxanders\b/g, "jaquayses");
	v = v.replace(/\bxander\b/g, "jaquays");
	
	textNode.nodeValue = v;
}
