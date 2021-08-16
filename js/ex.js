makeNote = ->
  height = parseInt 100+Math.random()*500, 10
  '<div class="note"><div class="note-inner" style="height: '+height+'px"></div></div>'
  
$ ->
  $notes = $ ".notes"
  for x in [0..10]
    $note = $ makeNote()
    $notes.append $note
    
  $('.notes').isotope
    itemSelector: '.note',
    layoutMode: 'masonry'