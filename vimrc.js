 set nocompatible
 filetype off
 set rtp+=~/.vim/bundle/Vundle.vim
 call vundle#begin()
 Plugin 'VundleVim/Vundle.vim'
 
 " Add plugins here
 Plugin 'Royal-Colorschemes'
 Plugin 'scrooloose/nerdtree'
 Plugin 'mattn/emmet-vim'
 Plugin 'jiangmiao/auto-pairs'
 Plugin 'tpope/vim-surround'
 Plugin 'aaren/arrowkeyrepurpose'
 Plugin 'ap/vim-css-color'
 
 
 "-- EMMET CONFIG--
 "redefine trigger key
 let g:user_emmet_leader_key=','
 
 set mouse=""
 set number
 set tabstop=2
 set softtabstop=2
 set shiftwidth=2
 set expandtab
 set autochdir 
       
 imap jj <esc>
 imap jj <c-c>
 vmap v <esc>
     
 
 map ; :  
   
 filetype plugin indent on
 
 autocmd BufEnter,BufNewFile *.vue set ft=html
 
 
 call vundle#end()
 filetype plugin indent on

