import Link from 'next/link'
import React from 'react'

const Form = ({type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>

    <h1 className='head_text text-left'><span className='blue_gradient'>{type} Post</span></h1>
    <p className='description '>{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.</p>
    <form
      onSubmit={handleSubmit}
      className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
    >
      {/* input */}
      <label>
        <span className='font-satoshi font-semibold text-base text-gray-700'>
          Your-AI-Prompt
        </span>

        <textarea
        value={post.prompt}
        onChange={(e) => setPost({ ...post, prompt: e.target.value})}
        placeholder='Write Your Prompt Here...'
        required
        className='form_textarea'
        >

        </textarea>
      </label>
      {/* Tag */}
      <label>
        <span className='font-satoshi font-semibold text-base text-gray-700'>
         Hash-Tag {` `}

          <span className='font-normal'>(#product, #webDevelopment, #idea, #graphicDesign) </span>
        </span>

        <input
        value={post.hashTag}
        onChange={(e) => setPost({ ...post, hashTag: e.target.value})}
        placeholder='#tag'
        required
        className='form_input'
        >

        </input>
      </label>

      <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href='/' className='text-gray-500 text-sm border border-double'>Cancel</Link>
        <button 
          type="submit"
          disabled={submitting}
          className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
          >
          Create
        </button>
      </div>
    </form>

    </section>
  )
}

export default Form