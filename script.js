document.getElementByName('pt-SelectAll').onclick = function() {
    var checkboxes = document.getElementsByName('pt-setting');
    for (var checkbox of checkboxes) {
      checkbox.checked = this.checked;
    }
  }