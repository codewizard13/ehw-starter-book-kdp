
/* Eric Hepperle - 2024-10-25 */
// Apply figure caption styles
var figures = document.querySelectorAll('figure');

domain = window.location.host
cap_label_regex = /^(.*:)( .*)$/

figures.forEach((fig_el, i) => {

  var cap_el = fig_el.querySelector('figcaption')
  console.log(`cap_el`, cap_el)

  var cap_html = cap_el.innerText.replace(cap_label_regex, `<span class="fig-label">$1</span>$2`)

  console.log(`cap_html`, cap_html)
  cap_el.innerHTML = cap_html

  // img source
  var img_src = fig_el.querySelector('img').src
  console.log(`img_src`, img_src)

  // If domain is 


})

// Apply ACF field H3 styles
var acf_field_labels = document.querySelectorAll('h3[id^="acf-field"]');
console.log(`acf_field_labels`, acf_field_labels)
acf_label_regex = /^(.*:)( .*)$/

acf_field_labels.forEach(label_el => {
  console.log(`label_el.innerText`, label_el.innerText)
  var html = label_el.innerText.replace(acf_label_regex, `<span class="field-label">$1</span>$2`)
  console.log(`label_el`, label_el)

  label_el.innerHTML = html;

})


// Make all field property labels bold
var acf_field_props = document.querySelectorAll('h3[id^="acf-field"] ~ ul li')
console.log(`acf_field_props`, acf_field_props)
acf_prop_regex = /^(.*:)( .*)$/

acf_field_props.forEach(label_el => {
  console.log(`label_el.innerText`, label_el.innerText)
  var html = label_el.innerText.replace(acf_prop_regex, `<span class="field-label">$1</span>$2`)
  console.log(`label_el`, label_el)

  label_el.innerHTML = html;

})


