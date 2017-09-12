"use strict";var $burger=$(".navbar-burger"),$menu=$(".navbar-menu"),$countryForm=$("#country-form"),$form=$("form"),$favoriteForm=$("form.favorite"),storedScrollTop=window.localStorage.getItem("scrollTop");storedScrollTop&&($(window).scrollTop(storedScrollTop),window.localStorage.removeItem("scrollTop")),$burger.on("click",function(){$burger.toggleClass("is-active"),$menu.toggleClass("is-active")}),$countryForm.length>0&&$countryForm.find("select").on("change",function(){return $countryForm.trigger("submit")}),$form.length>0&&$form.validate(),$favoriteForm.length>0&&$favoriteForm.on("submit",function(o){o.preventDefault(),window.localStorage.setItem("scrollTop",$(window).scrollTop()),o.target.submit()});var $mapDiv=$("#map");if($mapDiv.length>0){var toiletData=$mapDiv.data("toilet");toiletData.latLng;var map=new google.maps.Map($mapDiv[0],{center:toiletData.latLng,zoom:14});new google.maps.Marker({position:toiletData.latLng,map:map,animation:google.maps.Animation.DROP,icon:{url:"https://cdn.shopify.com/s/files/1/1061/1924/files/Poop_Emoji.png?9898922749706957214",scaledSize:new google.maps.Size(35,35)}})}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkYnVyZ2VyIiwiJCIsIiRtZW51IiwiJGNvdW50cnlGb3JtIiwiJGZvcm0iLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RvcmVkU2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwicmVtb3ZlSXRlbSIsIm9uIiwidG9nZ2xlQ2xhc3MiLCJsZW5ndGgiLCJmaW5kIiwidHJpZ2dlciIsInZhbGlkYXRlIiwiJGZhdm9yaXRlRm9ybSIsImUiLCJzZXRJdGVtIiwidGFyZ2V0Iiwic3VibWl0IiwiJG1hcERpdiIsInRvaWxldERhdGEiLCJkYXRhIiwiZ29vZ2xlIiwibWFwcyIsIk1hcCIsImNlbnRlciIsInpvb20iLCJsYXRMbmciLCJtYXAiLCJhbmltYXRpb24iLCJBbmltYXRpb24iLCJEUk9QIiwiaWNvbiIsInBvc2l0aW9uIiwiU2l6ZSJdLCJtYXBwaW5ncyI6ImFBQ0EsSUFBTUEsUUFBVUMsRUFBRSxrQkFEbEJDLE1BQUFELEVBQUEsZ0JBQ01ELGFBQVlDLEVBQUEsaUJBQ1pDLE1BQVVELEVBQUEsUUFDVkUsY0FBaUJGLEVBQUEsaUJBQ2pCRyxnQkFBTkMsT0FBQUMsYUFBQUMsUUFBQSxhQUlBQyxrQkFHRVAsRUFBRUksUUFBUUksVUFBVUQsaUJBRHRCSCxPQUFHRyxhQUFpQkUsV0FBQSxjQUduQlYsUUFBQVcsR0FBQSxRQUFBLFdBR0NYLFFBQVFZLFlBQVksYUFEdEJaLE1BQVFXLFlBQVksZUFBcEJSLGFBQUFVLE9BQUEsR0FBQVYsYUFBQVcsS0FBQSxVQUFBSCxHQUFBLFNBQUEsV0FBQSxPQUFBUixhQUFBWSxRQUFBLFlBS0FYLE1BQUdELE9BQWFVLEdBQUFBLE1BQWhCRyxXQUE0QkMsY0FBQUosT0FBQSxHQUsxQkksY0FBY04sR0FBRyxTQUFVLFNBQUNPLEdBSDNCZCxFQUFBQSxpQkFFQWEsT0FBQUEsYUFBQUUsUUFBMEIsWUFBQWxCLEVBQUFJLFFBQUFJLGFBQzNCUSxFQUFBQSxPQUFBQSxXQUlFQyxJQUFFRSxRQUFPQyxFQUFBQSxRQUNWLEdBTERDLFFBQUFULE9BQUEsRUFBQSxDQU1ELElBQUFVLFdBQUFELFFBQUFFLEtBQUEsVUFFREQsV0FBTUQsT0FDTixJQUFHQSxJQUFRVCxJQUFSWSxPQUFvQkMsS0FBQUMsSUFBQUwsUUFBQSxJQUNyQk0sT0FBTUwsV0FBYUQsT0FLakJPLEtBQU0sS0FETkQsSUFBQUEsT0FBUUwsS0FBQUEsUUFDUk0sU0FBTU4sV0FBQU8sT0FLTkMsSUFBS0EsSUFQUEMsVUFBQVAsT0FBQUMsS0FBQU8sVUFBQUMsS0FLQUMsTUFDRUMsSUFBQUEsdUZBQ0FMLFdBRnFCLElBQUFOLE9BQUFDLEtBQUFXLEtBQUEsR0FBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZ29vZ2xlICovXG5jb25zdCAkYnVyZ2VyID0gJCgnLm5hdmJhci1idXJnZXInKTtcbmNvbnN0ICRtZW51ID0gJCgnLm5hdmJhci1tZW51Jyk7XG5jb25zdCAkY291bnRyeUZvcm0gPSAkKCcjY291bnRyeS1mb3JtJyk7XG5jb25zdCAkZm9ybSA9ICQoJ2Zvcm0nKTtcbmNvbnN0ICRmYXZvcml0ZUZvcm0gPSAkKCdmb3JtLmZhdm9yaXRlJyk7XG5jb25zdCBzdG9yZWRTY3JvbGxUb3AgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njcm9sbFRvcCcpO1xuLy8gY29uc3QgbG9jYXRpb24gPSByZXF1aXJlKCcuLi9tb2RlbHMvbG9jYXRpb24nKTtcbi8vIGNvbnN0IHRvaWxldCA9IHJlcXVpcmUoJy4uL21vZGVscy90b2lsZXQnKTtcblxuaWYoc3RvcmVkU2Nyb2xsVG9wKSB7XG4gICQod2luZG93KS5zY3JvbGxUb3Aoc3RvcmVkU2Nyb2xsVG9wKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzY3JvbGxUb3AnKTtcbn1cblxuJGJ1cmdlci5vbignY2xpY2snLCAoKSA9PiB7XG4gICRidXJnZXIudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAkbWVudS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG59KTtcblxuaWYoJGNvdW50cnlGb3JtLmxlbmd0aCA+IDApICRjb3VudHJ5Rm9ybS5maW5kKCdzZWxlY3QnKS5vbignY2hhbmdlJywgKCkgPT4gJGNvdW50cnlGb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpKTtcblxuaWYoJGZvcm0ubGVuZ3RoID4gMCkgJGZvcm0udmFsaWRhdGUoKTtcblxuaWYoJGZhdm9yaXRlRm9ybS5sZW5ndGggPiAwKSB7XG4gICRmYXZvcml0ZUZvcm0ub24oJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGdldCB3aW5kb3cgcG9zaXRpb25cbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Njcm9sbFRvcCcsICQod2luZG93KS5zY3JvbGxUb3AoKSk7XG4gICAgZS50YXJnZXQuc3VibWl0KCk7XG4gIH0pO1xufVxuXG5jb25zdCAkbWFwRGl2ID0gJCgnI21hcCcpO1xuaWYoJG1hcERpdi5sZW5ndGggPiAwKSB7XG4gIGNvbnN0IHRvaWxldERhdGEgPSAkbWFwRGl2LmRhdGEoJ3RvaWxldCcpO1xuXG4gIHRvaWxldERhdGEubGF0TG5nO1xuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKCRtYXBEaXZbMF0sIHtcbiAgICBjZW50ZXI6IHRvaWxldERhdGEubGF0TG5nLFxuICAgIHpvb206IDE0XG5cbiAgfSk7XG4gIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiB0b2lsZXREYXRhLmxhdExuZyxcbiAgICBtYXA6IG1hcCxcbiAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgIGljb246IHtcbiAgICAgIHVybDogJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8xMDYxLzE5MjQvZmlsZXMvUG9vcF9FbW9qaS5wbmc/OTg5ODkyMjc0OTcwNjk1NzIxNCcsXG4gICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgzNSwzNSlcbiAgICB9XG4gIH0pO1xufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vICQoJyN0b2lsZXRGaWx0ZXInKS5vbignY2xpY2snLCAoKSA9PiB7XG4vLyAgIGlmKGxvY2F0aW9uLmFyZWEgPT09IHRvaWxldC5sb2NhdGlvbikge1xuLy8gICAgIHRvaWxldC5zaG93KCk7XG4vLyAgIH1cbi8vIH0pO1xuIl19
