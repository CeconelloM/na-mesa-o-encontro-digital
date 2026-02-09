import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { Comment } from "@/data/mockData";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(comment.likes);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
          {comment.avatar}
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">{comment.author}</span>
            <span className="text-xs text-muted-foreground">{comment.createdAt}</span>
          </div>
          <p className="text-sm leading-relaxed text-secondary-foreground">{comment.text}</p>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLike}
              className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <Heart className={`h-3.5 w-3.5 ${liked ? "fill-primary text-primary" : ""}`} />
              {likes}
            </button>
            <button className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary">
              <MessageCircle className="h-3.5 w-3.5" /> Responder
            </button>
          </div>
        </div>
      </div>
      {comment.replies?.map((reply) => (
        <div key={reply.id} className="ml-12">
          <CommentItem comment={reply} />
        </div>
      ))}
    </div>
  );
};

const CommentSection = ({ comments }: CommentSectionProps) => {
  const [newComment, setNewComment] = useState("");

  return (
    <div className="space-y-6">
      <h3 className="font-serif text-lg font-semibold text-foreground">
        Comentários ({comments.length})
      </h3>

      <div className="flex gap-3">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
          EU
        </div>
        <div className="flex flex-1 gap-2">
          <Textarea
            placeholder="Compartilhe seus pensamentos..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[40px] resize-none border-border bg-secondary text-sm"
            rows={1}
          />
          <Button size="icon" className="flex-shrink-0" disabled={!newComment.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-5">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
