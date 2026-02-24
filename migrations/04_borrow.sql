CREATE TABLE IF NOT EXISTS borrow (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bookid BIGINT NOT NULL,
  memberid BIGINT NOT NULL,
  brwdate DATE NOT NULL DEFAULT CURRENT_DATE,
  retdate DATE,
  CONSTRAINT borrow_bookid_fkey FOREIGN KEY (bookid)
    REFERENCES books(id)
    ON DELETE CASCADE,
  CONSTRAINT borrow_memberid_fkey FOREIGN KEY (memberid)
    REFERENCES members(id)
    ON DELETE CASCADE,
  CONSTRAINT borrow_bookid_key UNIQUE (bookid),
  CONSTRAINT borrow_memberid_key UNIQUE (memberid)
);