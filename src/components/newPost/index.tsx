import React, {useState} from "react";
import {BackBtn, WebTitle} from "../tabs/style";
import {
    AddPostNav, NavBlock,
    AddNewPostPage, FormWrap,
    InputWrap, TxtAreaWrap,
    BtnRow, DelPostBtn, BtnGroup,
    CancelBtn, AddPostBtn} from "./style";
import {NewPostInput} from './newPostLine';
import {NewPostImgInput,} from './newPostLine/newImgLine';
import {AddPostProps} from '../../others/types/formsTypes';
import {TextAreaLine} from "./newPostLine/TxtAreaLine";

export const AddNewPost = () => {

    const [value, setValue] = useState<AddPostProps>({
        title: '',
        url: '',
        date: '',
        image: '',
        description: '',
        text: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue((props: AddPostProps) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setValue((props: AddPostProps) => {
            return (
                {
                    ...props,
                    [e.target.name]: e.target.value,
                })
        })
    }
    return (
        <AddNewPostPage>
            <AddPostNav>
                <NavBlock>
                    <BackBtn to="/">
                        <p>Back to home</p>
                    </BackBtn>
                    <BackBtn to="/addPost">| Add post</BackBtn>
                </NavBlock>
                <WebTitle>
                    Add Post
                </WebTitle>
            </AddPostNav>

            <FormWrap>
                <InputWrap>
                    <NewPostInput
                        label={"Title"}
                        name={"title"}
                        type={"text"}
                        placeholder={"Your title"}
                        value={value.title}
                        error
                        onChange={handleChange}
                    />
                    <NewPostInput
                        label={"URL"}
                        name={"url"}
                        type={"text"}
                        placeholder={"Your url"}
                        value={value.url}
                        error
                        onChange={handleChange}
                    />
                    <NewPostInput
                        label={"Publish at"}
                        name={"date of publish"}
                        type={"date of publish"}
                        placeholder={"12/01/22"}
                        value={value.date}
                        error
                        onChange={handleChange}
                    />
                    <NewPostImgInput
                        label={"Image"}
                        name={"image"}
                        type={"img"}
                        placeholder={"filename.jpeg"}
                        value={value.image}
                        error
                        onChange={handleChange}
                     />
                </InputWrap>
                <TxtAreaWrap>
                    <TextAreaLine
                        label={'Description'}
                        name={'description'}
                        placeholder={'Add your text'}
                        value={value.description}
                        error
                        onChange={handleChangeTextArea}/>
                    <TextAreaLine
                        label={'Text'}
                        name={'text'}
                        placeholder={'Add your text'}
                        value={value.text}
                        error
                        onChange={handleChangeTextArea}/>
                </TxtAreaWrap>
            </FormWrap>
                 <BtnRow>
                     <DelPostBtn>
                         <span>Delete post</span>
                     </DelPostBtn>
                     <BtnGroup>
                         <CancelBtn>
                             <span>Cancel</span>
                         </CancelBtn>
                         <AddPostBtn>
                             <span>Add post</span>
                         </AddPostBtn>
                     </BtnGroup>
                 </BtnRow>


        </AddNewPostPage>
    )}