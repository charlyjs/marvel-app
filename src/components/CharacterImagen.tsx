import defaultCover from '../assets/default-cover.jpeg'

export default function CharacterImagen({ imagen, name }: { imagen: string, name: string }) {

  const coverImagen = imagen ? imagen : defaultCover;

  return(
    <img src={coverImagen} alt={name} className='border-rose-950 border-2 shadow-lg shadow-rose-950 rounded-md w-screen h-full object-cover' />
  )
}
