let hod = 0;
let j = 0;
let i = 0;

document.getElementById('app').onclick = function(event) {

    while (i < 3) {
        if (document.querySelectorAll('input')[i].matches(':checked') == true) {
            $('.form').addClass('active');
        }
        i++;
    }
    

    if (document.querySelectorAll('input')[0].matches(':checked') == true) {
        if (event.target.className == 'app_block') {
            if (hod%2 == 0) {
                event.target.innerHTML = 'x';
                event.target.style.pointerEvents='none';
            } else {
                event.target.innerHTML = '0';
                event.target.style.pointerEvents='for';
            }
            hod++;
            checkWinner();
        }
    }

 
    if (document.querySelectorAll('input')[1].matches(':checked') == true) {
        
        if (event.target.className == 'app_block') {
            if (hod < 6) {
                event.target.innerHTML = 'x';
                event.target.style.pointerEvents='none';
                hod++;
                while (hod < 5) {
                    let allblock = document.getElementsByClassName('app_block');
                    function randomInteger(min, max) {
                        let rand = min - 0.5 + Math.random() * (max - min + 1);
                        return Math.round(rand);
                    }
                    let a = randomInteger(0, 8);
                    if (allblock[a].innerHTML == '') {
                        allblock[a].innerHTML = '0';
                        allblock[a].style.pointerEvents='none';
                        break;
                    }
                }
            };
            checkWinner();
        }
    }

    if (document.querySelectorAll('input')[2].matches(':checked') == true) {
        let allblock = document.getElementsByClassName('app_block');
        if (event.target.className == 'app_block') {
            if (hod < 6) {
                function randomInteger(min, max) {
                    let rand = min - 0.5 + Math.random() * (max - min + 1);
                    return Math.round(rand);
                }
                let a = randomInteger(0, 8);
                event.target.innerHTML = 'x';
                event.target.style.pointerEvents='none';
                if (hod == 0) {
                    if (allblock[4].innerHTML == 'x' ||
                        allblock[3].innerHTML == 'x') {
                            allblock[6].innerHTML = '0';
                            allblock[6].style.pointerEvents='none';
                    }
                    if (allblock[0].innerHTML == 'x' ||
                        allblock[2].innerHTML == 'x' ||
                        allblock[6].innerHTML == 'x' ||
                        allblock[8].innerHTML == 'x') {
                            allblock[4].innerHTML = '0';
                            allblock[4].style.pointerEvents='none';
                    }
                    if (allblock[1].innerHTML == 'x') {
                            allblock[2].innerHTML = '0';
                            allblock[2].style.pointerEvents='none';
                    }
                    if (allblock[5].innerHTML == 'x' ||
                        allblock[7].innerHTML == 'x') {
                            allblock[8].innerHTML = '0';
                            allblock[8].style.pointerEvents='none';
                    }
                }
                if (hod > 0) {
                    if (allblock[0].innerHTML == '0' &&
                        allblock[1].innerHTML == '0' &&
                        allblock[2].innerHTML == '') {
                        allblock[2].innerHTML = '0';
                        allblock[2].style.pointerEvents='none';
                    } else {
                        if (allblock[1].innerHTML == '0' &&
                            allblock[2].innerHTML == '0' &&
                            allblock[0].innerHTML == '') {
                            allblock[0].innerHTML = '0';
                            allblock[0].style.pointerEvents='none';
                        } else {
                            if (allblock[3].innerHTML == '0' &&
                                allblock[4].innerHTML == '0' &&
                                allblock[5].innerHTML == '') {
                                allblock[5].innerHTML = '0';
                                allblock[5].style.pointerEvents='none';
                            } else {
                                if (allblock[4].innerHTML == '0' &&
                                    allblock[5].innerHTML == '0' &&
                                    allblock[3].innerHTML == '') {
                                    allblock[3].innerHTML = '0';
                                    allblock[3].style.pointerEvents='none';
                                } else {
                                    if (allblock[6].innerHTML == '0' &&
                                        allblock[7].innerHTML == '0' &&
                                        allblock[8].innerHTML == '') {
                                        allblock[8].innerHTML = '0';
                                        allblock[8].style.pointerEvents='none';
                                    } else {
                                        if (allblock[7].innerHTML == '0' &&
                                            allblock[8].innerHTML == '0' &&
                                            allblock[6].innerHTML == '') {
                                            allblock[6].innerHTML = '0';
                                            allblock[6].style.pointerEvents='none';
                                        } else {
                                            if (allblock[0].innerHTML == '0' &&
                                                allblock[3].innerHTML == '0' &&
                                                allblock[6].innerHTML == '') {
                                                allblock[6].innerHTML = '0';
                                                allblock[6].style.pointerEvents='none';
                                            } else {
                                                if (allblock[3].innerHTML == '0' &&
                                                    allblock[6].innerHTML == '0' &&
                                                    allblock[0].innerHTML == '') {
                                                    allblock[0].innerHTML = '0';
                                                    allblock[0].style.pointerEvents='none';
                                                } else {
                                                    if (allblock[1].innerHTML == '0' &&
                                                        allblock[4].innerHTML == '0' &&
                                                        allblock[7].innerHTML == '') {
                                                        allblock[7].innerHTML = '0';
                                                        allblock[7].style.pointerEvents='none';
                                                    } else {
                                                        if (allblock[4].innerHTML == '0' &&
                                                            allblock[7].innerHTML == '0' &&
                                                            allblock[1].innerHTML == '') {
                                                            allblock[1].innerHTML = '0';
                                                            allblock[1].style.pointerEvents='none';
                                                        } else {
                                                            if (allblock[2].innerHTML == '0' &&
                                                                allblock[5].innerHTML == '0' &&
                                                                allblock[8].innerHTML == '') {
                                                                allblock[8].innerHTML = '0';
                                                                allblock[8].style.pointerEvents='none';
                                                            } else {
                                                                if (allblock[5].innerHTML == '0' &&
                                                                    allblock[8].innerHTML == '0' &&
                                                                    allblock[2].innerHTML == '') {
                                                                    allblock[2].innerHTML = '0';
                                                                    allblock[2].style.pointerEvents='none';
                                                                } else {
                                                                    if (allblock[0].innerHTML == '0' &&
                                                                        allblock[4].innerHTML == '0' &&
                                                                        allblock[8].innerHTML == '') {
                                                                        allblock[8].innerHTML = '0';
                                                                        allblock[8].style.pointerEvents='none';
                                                                    } else {
                                                                        if (allblock[4].innerHTML == '0' &&
                                                                            allblock[8].innerHTML == '0' &&
                                                                            allblock[0].innerHTML == '') {
                                                                            allblock[0].innerHTML = '0';
                                                                            allblock[0].style.pointerEvents='none';
                                                                        } else {
                                                                            if (allblock[2].innerHTML == '0' &&
                                                                                allblock[4].innerHTML == '0' &&
                                                                                allblock[6].innerHTML == '') {
                                                                                allblock[6].innerHTML = '0';
                                                                                allblock[6].style.pointerEvents='none';
                                                                            } else {
                                                                                if (allblock[4].innerHTML == '0' &&
                                                                                    allblock[6].innerHTML == '0' &&
                                                                                    allblock[2].innerHTML == '') {
                                                                                    allblock[2].innerHTML = '0';
                                                                                    allblock[2].style.pointerEvents='none';
                                                                                } else {
                                                                                    if (allblock[0].innerHTML == '0' &&
                                                                                        allblock[2].innerHTML == '0' &&
                                                                                        allblock[1].innerHTML == '') {
                                                                                        allblock[1].innerHTML = '0';
                                                                                        allblock[1].style.pointerEvents='none';
                                                                                    } else {
                                                                                        if (allblock[3].innerHTML == '0' &&
                                                                                            allblock[5].innerHTML == '0' &&
                                                                                            allblock[4].innerHTML == '') {
                                                                                            allblock[4].innerHTML = '0';
                                                                                            allblock[4].style.pointerEvents='none';
                                                                                        } else {
                                                                                            if (allblock[6].innerHTML == '0' &&
                                                                                                allblock[8].innerHTML == '0' &&
                                                                                                allblock[7].innerHTML == '') {
                                                                                                allblock[7].innerHTML = '0';
                                                                                                allblock[7].style.pointerEvents='none';
                                                                                            } else {
                                                                                                if (allblock[0].innerHTML == '0' &&
                                                                                                    allblock[6].innerHTML == '0' &&
                                                                                                    allblock[3].innerHTML == '') {
                                                                                                    allblock[3].innerHTML = '0';
                                                                                                    allblock[3].style.pointerEvents='none';
                                                                                                } else {
                                                                                                    if (allblock[1].innerHTML == '0' &&
                                                                                                        allblock[7].innerHTML == '0' &&
                                                                                                        allblock[4].innerHTML == '') {
                                                                                                        allblock[4].innerHTML = '0';
                                                                                                        allblock[4].style.pointerEvents='none';
                                                                                                    } else {
                                                                                                        if (allblock[2].innerHTML == '0' &&
                                                                                                            allblock[8].innerHTML == '0' &&
                                                                                                            allblock[5].innerHTML == '') {
                                                                                                            allblock[5].innerHTML = '0';
                                                                                                            allblock[5].style.pointerEvents='none';
                                                                                                        } else {
                                                                                                            if (allblock[0].innerHTML == '0' &&
                                                                                                                allblock[8].innerHTML == '0' &&
                                                                                                                allblock[4].innerHTML == '') {
                                                                                                                allblock[4].innerHTML = '0';
                                                                                                                allblock[4].style.pointerEvents='none';
                                                                                                            } else {
                                                                                                                if (allblock[2].innerHTML == '0' &&
                                                                                                                    allblock[6].innerHTML == '0' &&
                                                                                                                    allblock[4].innerHTML == '') {
                                                                                                                    allblock[4].innerHTML = '0';
                                                                                                                    allblock[4].style.pointerEvents='none';
                                                                                                                } else {
                                                                                                                    if (allblock[0].innerHTML == 'x' &&
                                                                                                                        allblock[1].innerHTML == 'x' &&
                                                                                                                        allblock[2].innerHTML == '') {
                                                                                                                        allblock[2].innerHTML = '0';
                                                                                                                        allblock[2].style.pointerEvents='none';
                                                                                                                        } else {
                                                                                                                            if (allblock[1].innerHTML == 'x' &&
                                                                                                                                allblock[2].innerHTML == 'x' &&
                                                                                                                                allblock[0].innerHTML == '') {
                                                                                                                                allblock[0].innerHTML = '0';
                                                                                                                                allblock[0].style.pointerEvents='none';
                                                                                                                            } else {
                                                                                                                                if (allblock[3].innerHTML == 'x' &&
                                                                                                                                    allblock[4].innerHTML == 'x' &&
                                                                                                                                    allblock[5].innerHTML == '') {
                                                                                                                                    allblock[5].innerHTML = '0';
                                                                                                                                    allblock[5].style.pointerEvents='none';
                                                                                                                                } else {
                                                                                                                                    if (allblock[4].innerHTML == 'x' &&
                                                                                                                                        allblock[5].innerHTML == 'x' &&
                                                                                                                                        allblock[3].innerHTML == '') {
                                                                                                                                        allblock[3].innerHTML = '0';
                                                                                                                                        allblock[3].style.pointerEvents='none';
                                                                                                                                    } else {
                                                                                                                                        if (allblock[6].innerHTML == 'x' &&
                                                                                                                                            allblock[7].innerHTML == 'x' &&
                                                                                                                                            allblock[8].innerHTML == '') {
                                                                                                                                            allblock[8].innerHTML = '0';
                                                                                                                                            allblock[8].style.pointerEvents='none';
                                                                                                                                        } else {
                                                                                                                                            if (allblock[7].innerHTML == 'x' &&
                                                                                                                                                allblock[8].innerHTML == 'x' &&
                                                                                                                                                allblock[6].innerHTML == '') {
                                                                                                                                                allblock[6].innerHTML = '0';
                                                                                                                                                allblock[6].style.pointerEvents='none';
                                                                                                                                            } else {
                                                                                                                                                if (allblock[0].innerHTML == 'x' &&
                                                                                                                                                    allblock[3].innerHTML == 'x' &&
                                                                                                                                                    allblock[6].innerHTML == '') {
                                                                                                                                                    allblock[6].innerHTML = '0';
                                                                                                                                                    allblock[6].style.pointerEvents='none';
                                                                                                                                                } else {
                                                                                                                                                    if (allblock[3].innerHTML == 'x' &&
                                                                                                                                                        allblock[6].innerHTML == 'x' &&
                                                                                                                                                        allblock[0].innerHTML == '') {
                                                                                                                                                        allblock[0].innerHTML = '0';
                                                                                                                                                        allblock[0].style.pointerEvents='none';
                                                                                                                                                    } else {
                                                                                                                                                        if (allblock[1].innerHTML == 'x' &&
                                                                                                                                                            allblock[4].innerHTML == 'x' &&
                                                                                                                                                            allblock[7].innerHTML == '') {
                                                                                                                                                            allblock[7].innerHTML = '0';
                                                                                                                                                            allblock[7].style.pointerEvents='none';
                                                                                                                                                        } else {
                                                                                                                                                            if (allblock[4].innerHTML == 'x' &&
                                                                                                                                                                allblock[7].innerHTML == 'x' &&
                                                                                                                                                                allblock[1].innerHTML == '') {
                                                                                                                                                                allblock[1].innerHTML = '0';
                                                                                                                                                                allblock[1].style.pointerEvents='none';
                                                                                                                                                            } else {
                                                                                                                                                                if (allblock[2].innerHTML == 'x' &&
                                                                                                                                                                    allblock[5].innerHTML == 'x' &&
                                                                                                                                                                    allblock[8].innerHTML == '') {
                                                                                                                                                                    allblock[8].innerHTML = '0';
                                                                                                                                                                    allblock[8].style.pointerEvents='none';
                                                                                                                                                                } else {
                                                                                                                                                                    if (allblock[5].innerHTML == 'x' &&
                                                                                                                                                                        allblock[8].innerHTML == 'x' &&
                                                                                                                                                                        allblock[2].innerHTML == '') {
                                                                                                                                                                        allblock[2].innerHTML = '0';
                                                                                                                                                                        allblock[2].style.pointerEvents='none';
                                                                                                                                                                    } else {
                                                                                                                                                                        if (allblock[0].innerHTML == 'x' &&
                                                                                                                                                                            allblock[4].innerHTML == 'x' &&
                                                                                                                                                                            allblock[8].innerHTML == '') {
                                                                                                                                                                            allblock[8].innerHTML = '0';
                                                                                                                                                                            allblock[8].style.pointerEvents='none';
                                                                                                                                                                        } else {
                                                                                                                                                                            if (allblock[4].innerHTML == 'x' &&
                                                                                                                                                                                allblock[8].innerHTML == 'x' &&
                                                                                                                                                                                allblock[0].innerHTML == '') {
                                                                                                                                                                                allblock[0].innerHTML = '0';
                                                                                                                                                                                allblock[0].style.pointerEvents='none';
                                                                                                                                                                            } else {
                                                                                                                                                                                if (allblock[2].innerHTML == 'x' &&
                                                                                                                                                                                    allblock[4].innerHTML == 'x' &&
                                                                                                                                                                                    allblock[6].innerHTML == '') {
                                                                                                                                                                                    allblock[6].innerHTML = '0';
                                                                                                                                                                                    allblock[6].style.pointerEvents='none';
                                                                                                                                                                                } else {
                                                                                                                                                                                    if (allblock[4].innerHTML == 'x' &&
                                                                                                                                                                                        allblock[6].innerHTML == 'x' &&
                                                                                                                                                                                        allblock[2].innerHTML == '') {
                                                                                                                                                                                        allblock[2].innerHTML = '0';
                                                                                                                                                                                        allblock[2].style.pointerEvents='none';
                                                                                                                                                                                    } else {
                                                                                                                                                                                        if (allblock[0].innerHTML == 'x' &&
                                                                                                                                                                                            allblock[2].innerHTML == 'x' &&
                                                                                                                                                                                            allblock[1].innerHTML == '') {
                                                                                                                                                                                            allblock[1].innerHTML = '0';
                                                                                                                                                                                            allblock[1].style.pointerEvents='none';
                                                                                                                                                                                        } else {
                                                                                                                                                                                            if (allblock[3].innerHTML == 'x' &&
                                                                                                                                                                                                allblock[5].innerHTML == 'x' &&
                                                                                                                                                                                                allblock[4].innerHTML == '') {
                                                                                                                                                                                                allblock[4].innerHTML = '0';
                                                                                                                                                                                                allblock[4].style.pointerEvents='none';
                                                                                                                                                                                            } else {
                                                                                                                                                                                                if (allblock[6].innerHTML == 'x' &&
                                                                                                                                                                                                    allblock[8].innerHTML == 'x' &&
                                                                                                                                                                                                    allblock[7].innerHTML == '') {
                                                                                                                                                                                                    allblock[7].innerHTML = '0';
                                                                                                                                                                                                    allblock[7].style.pointerEvents='none';
                                                                                                                                                                                                } else {
                                                                                                                                                                                                    if (allblock[0].innerHTML == 'x' &&
                                                                                                                                                                                                        allblock[6].innerHTML == 'x' &&
                                                                                                                                                                                                        allblock[3].innerHTML == '') {
                                                                                                                                                                                                        allblock[3].innerHTML = '0';
                                                                                                                                                                                                        allblock[3].style.pointerEvents='none';
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                        if (allblock[1].innerHTML == 'x' &&
                                                                                                                                                                                                            allblock[7].innerHTML == 'x' &&
                                                                                                                                                                                                            allblock[4].innerHTML == '') {
                                                                                                                                                                                                            allblock[4].innerHTML = '0';
                                                                                                                                                                                                            allblock[4].style.pointerEvents='none';
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                            if (allblock[2].innerHTML == 'x' &&
                                                                                                                                                                                                                allblock[8].innerHTML == 'x' &&
                                                                                                                                                                                                                allblock[5].innerHTML == '') {
                                                                                                                                                                                                                allblock[5].innerHTML = '0';
                                                                                                                                                                                                                allblock[5].style.pointerEvents='none';
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                if (allblock[0].innerHTML == 'x' &&
                                                                                                                                                                                                                    allblock[8].innerHTML == 'x' &&
                                                                                                                                                                                                                    allblock[4].innerHTML == '') {
                                                                                                                                                                                                                    allblock[4].innerHTML = '0';
                                                                                                                                                                                                                    allblock[4].style.pointerEvents='none';
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                    if (allblock[2].innerHTML == 'x' &&
                                                                                                                                                                                                                        allblock[6].innerHTML == 'x' &&
                                                                                                                                                                                                                        allblock[4].innerHTML == '') {
                                                                                                                                                                                                                        allblock[4].innerHTML = '0';
                                                                                                                                                                                                                        allblock[4].style.pointerEvents='none';
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                        if (allblock[2].innerHTML == 'x' &&
                                                                                                                                                                                                                            allblock[4].innerHTML == 'x' &&
                                                                                                                                                                                                                            allblock[6].innerHTML == '0' &&
                                                                                                                                                                                                                            allblock[0].innerHTML == '') {
                                                                                                                                                                                                                                allblock[0].innerHTML = '0';
                                                                                                                                                                                                                                allblock[0].style.pointerEvents='none';
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                            while (hod < 4) {
                                                                                                                                                                                                                                let allblock = document.getElementsByClassName('app_block');
                                                                                                                                                                                                                                function randomInteger(min, max) {
                                                                                                                                                                                                                                    let rand = min - 0.5 + Math.random() * (max - min + 1);
                                                                                                                                                                                                                                    return Math.round(rand);
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                let a = randomInteger(0, 8);
                                                                                                                                                                                                                                if (allblock[a].innerHTML == '') {
                                                                                                                                                                                                                                    allblock[a].innerHTML = '0';
                                                                                                                                                                                                                                    allblock[a].style.pointerEvents='none';
                                                                                                                                                                                                                                    break;
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                }
                                                                                                                                                                                                            }
                                                                                                                                                                                                        }
                                                                                                                                                                                                    }
                                                                                                                                                                                                }
                                                                                                                                                                                            }
                                                                                                                                                                                        }
                                                                                                                                                                                    }
                                                                                                                                                                                }
                                                                                                                                                                            }
                                                                                                                                                                        }
                                                                                                                                                                    }
                                                                                                                                                                }
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }   
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }    
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }   
                        }
                    }
                }
            hod++;
            checkWinner();
        }
    }
    
    function checkWinner() {
        let allblock = document.getElementsByClassName('app_block');

        while (j < 9) {
            if (allblock[j].innerHTML == 'x') {
                $(`.app_block_${j}_x_1,.app_block_${j}_x_2`).addClass('active');
            };
            if (allblock[j].innerHTML == '0') {
                $(`.app_block_${j}_0_1,.app_block_${j}_0_2`).addClass('active');
            };
            j++;
        }
        
        if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x' ||
            allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x' ||
            allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x' ||
            allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x' ||
            allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x' ||
            allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x' ||
            allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x' ||
            allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x') {
            $('.container_5,.app').addClass('active');
        } else {
            if (allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0' ||
                allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0' ||
                allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0' ||
                allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0' ||
                allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0' ||
                allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0' ||
                allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0' ||
                allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0') {
                $('.container_6,.app').addClass('active');
            } else {
                if ((allblock[0].innerHTML == 'x' || allblock[0].innerHTML == '0') &&
                    (allblock[1].innerHTML == 'x' || allblock[1].innerHTML == '0') &&
                    (allblock[2].innerHTML == 'x' || allblock[2].innerHTML == '0') &&
                    (allblock[3].innerHTML == 'x' || allblock[3].innerHTML == '0') && 
                    (allblock[4].innerHTML == 'x' || allblock[4].innerHTML == '0') &&
                    (allblock[5].innerHTML == 'x' || allblock[5].innerHTML == '0') &&
                    (allblock[6].innerHTML == 'x' || allblock[6].innerHTML == '0') &&
                    (allblock[7].innerHTML == 'x' || allblock[7].innerHTML == '0') &&
                    (allblock[8].innerHTML == 'x' || allblock[8].innerHTML == '0')) {
                        $('.container_6_6,.app').addClass('active');
                }
            }
        }

        if (allblock[0].innerHTML == 'x' && allblock[3].innerHTML == 'x' && allblock[6].innerHTML == 'x' ||
            allblock[0].innerHTML == '0' && allblock[3].innerHTML == '0' && allblock[6].innerHTML == '0') {
                $('.container_7').addClass('active')
            }
        if (allblock[1].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[7].innerHTML == 'x' ||
            allblock[1].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[7].innerHTML == '0') {
            $('.container_8').addClass('active')
            }
        if (allblock[2].innerHTML == 'x' && allblock[5].innerHTML == 'x' && allblock[8].innerHTML == 'x' ||
            allblock[2].innerHTML == '0' && allblock[5].innerHTML == '0' && allblock[8].innerHTML == '0') {
            $('.container_9').addClass('active')
            }
        if (allblock[0].innerHTML == 'x' && allblock[1].innerHTML == 'x' && allblock[2].innerHTML == 'x' ||
            allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0' && allblock[2].innerHTML == '0') {
            $('.container_10').addClass('active')
            }
        if (allblock[3].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[5].innerHTML == 'x' ||
            allblock[3].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[5].innerHTML == '0') {
            $('.container_11').addClass('active')
            }
        if (allblock[6].innerHTML == 'x' && allblock[7].innerHTML == 'x' && allblock[8].innerHTML == 'x' ||
            allblock[6].innerHTML == '0' && allblock[7].innerHTML == '0' && allblock[8].innerHTML == '0') {
            $('.container_12').addClass('active')
            }
        if (allblock[0].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[8].innerHTML == 'x' ||
            allblock[0].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[8].innerHTML == '0') {
            $('.container_13').addClass('active')
            }
        if (allblock[2].innerHTML == 'x' && allblock[4].innerHTML == 'x' && allblock[6].innerHTML == 'x' ||
            allblock[2].innerHTML == '0' && allblock[4].innerHTML == '0' && allblock[6].innerHTML == '0') {
            $('.container_14').addClass('active')
            }
        j = 0;
    }
}


document.querySelector("#submit").onclick = function(){
    let allblock = document.getElementsByClassName('app_block');
    let c = 0;
    while (c < 9) {
        allblock[c].innerHTML = '';
        allblock[c].style.pointerEvents='';
        c++;
        $('.app_block_0_x_1,.app_block_0_x_2,.app_block_0_0_1,.app_block_0_0_2,.app_block_1_x_1,.app_block_1_x_2,.app_block_1_0_1,.app_block_1_0_2,.app_block_2_x_1,.app_block_2_x_2,.app_block_2_0_1,.app_block_2_0_2').removeClass('active');
        $('.app_block_3_x_1,.app_block_3_x_2,.app_block_3_0_1,.app_block_3_0_2,.app_block_4_x_1,.app_block_4_x_2,.app_block_4_0_1,.app_block_4_0_2,.app_block_5_x_1,.app_block_5_x_2,.app_block_5_0_1,.app_block_5_0_2').removeClass('active');
        $('.app_block_6_x_1,.app_block_6_x_2,.app_block_6_0_1,.app_block_6_0_2,.app_block_7_x_1,.app_block_7_x_2,.app_block_7_0_1,.app_block_7_0_2,.app_block_8_x_1,.app_block_8_x_2,.app_block_8_0_1,.app_block_8_0_2').removeClass('active');
        $('.container_5,.container_6,.container_6_6,.container_7,.container_8,.container_9,.container_10,.container_11,.container_12,.container_13,.container_14').removeClass('active');
        $('.app,.form,.form_0').removeClass('active');
        hod = 0;
        i = 0;
    }
}