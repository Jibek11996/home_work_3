
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsParent = document.querySelector('.tabheader__items');
    const tabContent = document.querySelectorAll('.tabcontent');

    const hideTabContent = () => {
        tabContent.forEach((item) => {
            item.style.display = 'none';
        });
        tabs.forEach((item) => {
            item.classList.remove('tabheader__item_active');
        });

    };
    const showContent = (i = 0) =>{
         hideTabContent();
         tabContent[i].style.display = 'block';
         tabs [i].classList.add('tabheader__item_active')
    };
    hideTabContent();
    showContent();


    let index = 0;
    function makeSlideshow (){
        setInterval( () => {
            if (index === tabs.length -1){
                index = 0
                return showContent(index);
            }
            index +=1
            showContent(index);
        }, 2000);
    }
    makeSlideshow()

    tabsParent.addEventListener('click', (e) => {
       const target = e.target;
       if (target.classList.contains('tabheader__item')){
           tabs.forEach((item,i) => {
               if (target === item){
                   hideTabContent();
                   showContent(i);
               }
           });
       }
    });


    const modal = document.querySelector('.modal');
    const modalTrigger = document.querySelector('.btn_white');
    const closeModalBtn = document.querySelector('.modal__close');

    const openModal = () =>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';

    };

    modalTrigger.addEventListener('click', openModal);

    const closeModal = () => {
        modal.classList.add('hidden');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    };
    closeModalBtn.addEventListener('click', closeModal)


    window.onscroll = () => {
        if (document.body.offsetHeight <= (window.innerHeight + window.pageYOffset)+1)
            openModal();
    }