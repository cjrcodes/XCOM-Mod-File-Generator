/**
 * 
 * ui.js, Controls specific/special behavior of the ui
 * 
 * @author Christian Rodriguez
 */

/**
 * Expands/collapses checkbox dropdowns
 * @param  {string} docId - Document id of selected dropdown
 * 
 * 
 */
 function showCheckboxes(parentId, docId, dropdownClicked) {
    let selector = parentId;
    let checkboxes = docId;

    //Check if dropdown was selected instead of quick select button
    if (dropdownClicked === true) {
        if (checkboxes.style.display === "block") {
            checkboxes.style.display = "none";
            return;
        } else {
            checkboxes.style.display = "block";
            return;
        }
    }

    if (checkboxes.style.display === "block" && selector.checked === false) {
        checkboxes.style.display = "none";
    } else if (checkboxes.style.display === "none" && selector.checked === false) {
        checkboxes.style.display = "none";
    } else {
        checkboxes.style.display = "block";
    }
}

/**
 * Select/deselect checkboxes, made for quick select checkboxes to check their grouped checkboxes
 * @param {document.getElementById} parentId - Document id of the quick select checkbox selected
 * @param {document.getElementById} docId - Document id of the checkboxes to be checked
 */
function selectCheckboxes(parentId, docId) {
    let selector = parentId;
    let checkboxes = docId;
    let i;

    for (i = 0; i < checkboxes.length; i++) {
        if ((selector.checked === false && checkboxes[i].checked === true) || (selector.checked === false && checkboxes[i].checked === false)) {
            checkboxes[i].checked = false;
        } else {
            checkboxes[i].checked = true;
        }
    }
}

/**
 * Select/deselect all checkboxes for a given section (e.g. part types, armor templates section)
 * @param {string} buttonId - String passed as 'selectall' or 'deselectall' to determine which action to take
 * @param {document.getElementById} docId - Document element section to select/deselect checkboxes
 */
function selectAllCheckboxes(buttonId, docId) {

    let checkboxes = docId;
    let i;
    let checkboxValue = false;

    if (buttonId === 'selectall') {
        checkboxValue = true;
    }

    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = checkboxValue;Kj-fYw39OFTI-nkwt1jVdQ

    }
}