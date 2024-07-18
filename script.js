document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const images = [
      'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
      'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    ];
  
    images.forEach((src, index) => {
      const col = document.createElement('div');
      col.className = 'col-md-4';
      const img = document.createElement('img');
      img.src = src;
      img.className = 'img-thumbnail';
      img.setAttribute('data-toggle', 'modal');
      img.setAttribute('data-target', '#imageModal');
      img.setAttribute('data-index', index);
      col.appendChild(img);
      gallery.appendChild(col);
    });
  
    $('#imageModal').on('show.bs.modal', function(event) {
      const img = $(event.relatedTarget);
      const src = img.attr('src');
      const modalImage = $('#modalImage');
      modalImage.attr('src', src);
    });
  });
  