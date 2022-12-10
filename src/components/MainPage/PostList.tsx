import { Link } from "react-router-dom";
import { Post } from "../../api/PostApi";

type Props = {
  post: Post;
};

const MainPagePostList = ({ post }: Props) => {
  return (
    <Link to="...">
      {/* Image */}
      {/* data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEBIVFRUXFRUVFxUVFRAVFRUXFRUXFhUXFRUYHSggGBolHRUVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OFxAQFyslHR0tLS0tKy8tLSstLS0tLS0rLS0tKy01LS0tLSsrLS0tKy0rKystLS0tLS0tKy0tLSs3K//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xAA6EAACAgEDAgQEAwUGBwAAAAAAAQIDEQQFIRIxBkFRcRNhgaEysfAUIlKRwQcVcqLR4SMkQmKCkpP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEAAwACAwACAwAAAAAAAAAAAQIRAxIEITEiQRRCYv/aAAwDAQACEQMRAD8A+nAA9j5IAAAAAAAAAAAAAAAAAAAAAAzgZSJpjBkw7DSWoHtcSZNXYl3ZSs1DILLGzcUkx01bH1N8nFdhLVeWaJjqgrV3v3J4TTMTGDIAAAAAAAAAAAAAAAAAAAAAAAAAAACUsAGRu0r26gj6zXVNWpWGvxCNy4I3IRVdZstIJXCXYjlE6RELDdv9exE5CUs/mVpSNxBqSdpHGwibCZqIR0NPqC/VYji1Mu1WGL1N9OvCeTYqU2lqLyeeYxAABQAAAAAAAAAAAAAAAAAAADIA8z4s8WafR9Cum8zeIRjjL5Scm20oxWe7aO9rbulfNnz7xf4Tjrb6rXNLpg65RcXJNN9Safk8tl62zYap138vj11F2VnGPrF91lNSi3FrDTym1yWKyjoNJGuEYVpRUeElwl9C3BnT9MTm+krlgjlI3lyQTQhEkTS39fmISNLJdzUNxPpCzSX9DEmRuZ0RFJ8myNPMnqiVCKwWK2R45JIIkoi3Xc/2amdvRKfSs9Me7+r7e48MeLKNW1GqyDm61Y4xk5dKz0yUlKMWpJtZyscrDfladSkmpLKZz9m8N1ae+V8fxuDglhJRjKXXLt+JtqPL9Dz3idbrNes79erMGlUjcwgAAAAAAAAAAAAAAAAAAMjIRFq59MJP0QHA3HW9U2s8IxRI5UrMvJYps+Z7IrkYjrRlySxnko13epKp+aOc1SV6LI5ojqkSGcwakNku5PI+c+KfHyrvlptPjMH0zsfKUl3jFeq7Nvz4wS14pGy6cdLck5V7ObIXM8dtniCcvx2tv5qGP5JHotBrlbFtd08SXo/LBeLnpech05fHvxxsunFEsGV4y9CeCx8zs86ZI3RG5EtaMyanrJ1EjqrLEUcrSsJKpFgq5LKOUqAAAAAAAAAAAAAAAAAADJS3uWKZvOOC8jl+KH/y1nt8y1+wPFVahPsy1VajzVV+F6F6nWrHJ75qy79eo9S5CxNcf6HkbtXepZpjVJY/6rJwln2UGsfUlhvGpj+PROS9aba5/wCWXSznaYhqKzL2FE/T6ovQieW2XxDRZZGqTdVknhQvTqk3/wBvVw/oz6hoNshBcrqfzw/5Hm5OWtW6cFrS8+tDZJZjFn5q8W7Vbp9dfXbGUZfFnJZT/ejOTlFr1ymfsRI529bDp9XHp1NMLPRtLqj/AIZd13Z5L8k3+vdxcUcfx+TNFfOOOT6h/Z1s+ptVlkq5KD6VFtNZa6s9/c+g7V/Znt9FjsVTm+pShGbzGCS4il5rOXznlnsK61FJRSSXZJJJeyMVt1tsOvJ+der53PRTg8Si19P6iKPos60+6T90ea8QbdXVF29ShFd+ppJex7KeTE+rPn8njTHuvtwlksUxOM95i3/wa7bfnXB9H0sliP3J9PrtQ+Vo5r/Fdp1+UmdpvDh0n9vQVRJOxV01knFOcOmXnHKljn+JG7kc/q/G7lyWqXwU8lqjsS0CUAGBgAFAAAAAAAAAAAAABsjn+IY509i+RfNNVX1QkvVMROSQ+K3JrJii4s7lXiUl6NnMU2mfTifTMp1vb7R09svfoiv80slyrfbvPR24+U6X9uo4t25Qg8OfP8Mcyl/6rksaLdpuSVensllpc/Drz9ZP8zhaYj+zrFf8vqngrUU2wdeq0d0ZTXVnUafNLj5YnzHJ9CrSSSjjC4SXZL5Hz3ad6u6UrKHThJY+JXP7xO5p99x3Pj3tNrTMvo0rFYyHqMjJyKN7g+5eq1kJdmZ1pL1rODc8lv28/B1GM8YX35LOh8UVyxlkHpSHU1QkszgpdPKzFSaa80sdyHS7hCfZltFiR8+3/XNTc6tHqelvzrjXl+eOto51e82L8Wi1C9vgS+0ZtnrvFWrvUWo6Ky2KafXCzTLH/jOaZ5GfiKqPF0LaPndXOMP/AKJOH3PbxX2vuXh5uPLeqr2h3NXZShbFx7qyq2vv6OSw+3k2dKL4+ZW0VsZpShKMovs4tNMsNnZ5pbZLtC4KNK55OhWuDFiGwAMKwACgAAAAAAAAAAAAAyjY1RlAfLfFWm6LpcYTbaPN31+Z9M8b7P1wdqzmPl8j5zI9/DbtVLKSrUeyS9kl9WSVSaaafbkk+GYSOmJr3W1bnG6C5/exyvmXJZPn2mvlW8xeDtaXxO+01/I+dy+JO7V7ePyYzLPU1ykdPRahxeWzx78Tx8lz7FPV77ZL8PBxr4nJLpPkUh6HxNqVbY5KSzhLg807pRffzOZ+1Szlt5/2LVWub/FydL+HasevbNfJrP13tu3yUX3Z7DbPFnZSZ4LSaZWdng9BodvhDnu/15HH+Nef03byKQ9huO9KdfTHjPf2OP39iOCJos9dKRSMeG9pvbZR6fS119ThCEHJ5l0xjHqfbLx3ZPXE0kyzSlgs+mc1tXEuor6dZ5LBylAGARQAAAAAAAAAAAAAAAAyjBlALIKSafZo+V+JtpdFr4/dbyn5ex9VRR3na46itwl9H5o6cXJ0lJfIDSdeeS9u+1z083Ga48n6opxZ74mJ9wyhw/M2VRYWGYcSjEK0hKRozDfAEPUZyaPuENHe2iWFyei0mo45PH6fV4WC7TuRi1dWHr46pepMtUvM8pVuJZhrl6nPouvQxu7vJa01rnLpieap1Lk+mPLZ6/ZtD8OOZd39jnyZWF1fqr6Vg3YMHmAAAAAAAAAAAAAAAAAAADKMGUBlM2NUc3edy+GsLu/sWKzM5CKniiNM4dElmXk/Q+c6vRODfp6nprbm3lvOSGxJrDPZxx0jGZl5RcG2Tq37XnmJz7dNKPdM7aIGa9BsxkoicQkSdLCgBE0ZTZMomYVtvCWQNI2vBd23SWXyUK02/t+uSxotmcuZ8L0Pa+F6I18JL3OfJfrHoha2HYY0xzLmXfJ2wYPBNptOy0MwARQAAAAAAAAAAAAAAAAAADKMBsCDX6pQi35njtXa5ybZ2d0k5M4ep4PTxRjEyrykl3IZXLyK2qsZSdh6IhHcqtz2J2k/L7HF09rR1K7STArXaKEm+CF7Mn2eDpx5JkibKuF/csv4iSvZX5yO0jdodpHJhtkV3WSanTxi+EXJojcBokgz0Gz1YWfU4VEMtHotBHCRx5Z9NVdSLDNYmTzKAAAAAAAAAAAAAAAAAAAAABpb2NzDQRytTQcfWaY9PZWU79Nk61ujxWq0hXo0Xds9XfoMlf8AuxLujvHIjgOC+ZJXnt9jpXaP0Qq0eDfaER0ruSYJoU4JY1/IxqqjRnJZtq/IiVQ0RtGfhk6pLFdBJsINPUdqjjHsV9Np+TpXU4w0cr2ahZrDNK2bnFWAAAAAAAAAAAAAAAAAAAAAAAAMGkoG5kIrSqIZ0F7BhxLEmOXLSkb0x1XWaus12Mcp6cz8A6TqHwi9kc16cx+zHT+EZ+EOxjnx05NCgtqs3UCTZcRUVFiS4CQMTKsRRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAMgAAYAAAwAMgwAMoyAAMAAAAAAAAAAf//Z */}
      <div></div>
      {/* Post & Post Info*/}
      <div className="post">
        <div className="post_title">{post.title}</div>
        <div className="post_info"></div>
      </div>
    </Link>
  );
};

export default MainPagePostList;